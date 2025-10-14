<script setup>
    import { ref, onMounted } from 'vue';
    import api from '@/plugins/axios';

    const genres = ref([]);

    const series = ref([]);

    const listSeries = async (genreId) => {
        const response = await api.get('discover/tv', {
            params: {
                with_genres: genreId,
                language: 'pt-BR'
            }
        });
        series.value = response.data.results
    };

    onMounted(async () => {
    const response = await api.get('genre/tv/list?language=pt-BR');
    genres.value = response.data.genres;
    });
</script>

<template>
    <h1>Programas de TV</h1>
    <ul class="genre-list">
    <li
    v-for="genre in genres"
    :key="genre.id"
    @click="listSeries(genre.id)"
    class="genre-item"
    >
    {{ genre.name }}
    </li>
    </ul>
    <div class="serie-list">
    <div v-for="serie in series" :key="serie.id" class="serie-card">
    <img
        :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
        :alt="serie.title"
    />
    <div class="serie-details">
        <p class="serie-title">{{ serie.name }}</p>
        <p class="serie-release-date">{{ serie.first_air_date }}</p>
        <p class="serie-genres">{{ serie.genre_ids }}</p>
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
    padding: 0;
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
</style>