<script setup>
    import { ref, onMounted } from 'vue';
    import api from '@/plugins/axios';
    import Loading from 'vue-loading-overlay';
    import { useGenreStore } from '@/stores/genre';

    const genreStore = useGenreStore();
    
    const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

    const isLoading = ref(false);

    const series = ref([]);

    const listSeries = async (genreId) => {
    isLoading.value = true;
    const response = await api.get('discover/tv', {
        params: {
        with_genres: genreId,
        language: 'pt-BR'
        }
    });
    series.value = response.data.results
    isLoading.value = false;
};

    onMounted(async () => {
    isLoading.value = true;
    await genreStore.getAllGenres('tv');
    isLoading.value = false;
});
</script>

<template>
    <h1>Programas de TV</h1>
    <ul class="genre-list">
        <li
    v-for="genre in genreStore.genres"
    :key="genre.id"
    @click="listSeries(genre.id)"
    class="genre-item"
>
    {{ genre.name }}
        </li>
    </ul>
    <loading v-model:active="isLoading" is-full-page />
    <div class="serie-list">
    <div v-for="serie in series" :key="serie.id" class="serie-card">
    <img
        :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
        :alt="serie.title"
    />
    <div class="serie-details">
        <p class="serie-name">{{ serie.name }}</p>
        <p class="serie-first_air_date">{{ formatDate(serie.first_air_date) }}</p>
        <p class="serie-genres">
            <span
    v-for="genre_id in serie.genre_ids"
    :key="genre_id"
    @click="listSeries(genre_id)"
>
    {{ genreStore.getGenreName(genre_id) }}
    </span>
    </p>
    </div>
    </div>
</div>
</template>

<style scoped>
.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    margin-bottom: 2rem;
}
.genre-item {
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
}

.genre-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
}

.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    margin-bottom: 2rem;
}

.serie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.serie-card {
    width: 15rem;
    height: 30rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem #000;
}

.serie-card img {
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #000;
}

.serie-details {
    padding: 0 0.5rem;
}

.serie-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3rem;
    height: 3.2rem;
}

.serie-genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
}

.serie-genres span {
    background-color: #748708;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
}

.serie-genres span:hover {
    cursor: pointer;
    background-color: #455a08;
    box-shadow: 0 0 0.5rem #748708;
}
</style>