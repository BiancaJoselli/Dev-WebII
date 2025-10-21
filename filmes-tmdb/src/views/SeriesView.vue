<script setup>
    import { ref, onMounted, onBeforeMount } from 'vue';
    import Loading from 'vue-loading-overlay';
    import { useGenreStore } from '@/stores/genre';
    import { useRouter } from 'vue-router'
    import { useSerieStore } from '@/stores/series';

    const router = useRouter()

    const genreStore = useGenreStore();
    const serieList = useSerieStore();

    onBeforeMount(() => {
    serieList.clearSeries()
})
    
    const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

    const isLoading = ref(false);

   // const series = ref([]);

    function openSerie(serieId) {
    router.push({ name: 'SerieDetails', params: { serieId } });
}

    const listSeries = async (genreId) => {
    genreStore.setCurrentGenreId(genreId);
    isLoading.value = true;
    // const response = await api.get('discover/tv', {
    // params: {
    //     with_genres: genreId,
    //     language: 'pt-BR',
    // },
    // });
    // series.value = response.data.results;
    await serieList.listSeries(genreId);
    console.log('series')
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
    :class="{ active: genre.id === genreStore.currentGenreId }"
    >
    {{ genre.name }}
    </li>
    </ul>
    <loading v-model:active="isLoading" is-full-page />
    <div class="serie-list">
    <div v-for="serie in serieList.series" :key="serie.id" class="serie-card">
        <img
    :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
    :alt="serie.name"
    @click="openSerie(serie.id)"
/>
    <div class="serie-details">
        <p class="serie-name">{{ serie.name }}</p>
        <p class="serie-first_air_date">{{ formatDate(serie.first_air_date) }}</p>
        <p class="serie-genres">
            <span
    v-for="genre_id in serie.genre_ids"
    :key="genre_id"
    @click="listSeries(genre_id)"
    :class="{ active: genre_id === genreStore.currentGenreId }"
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
    background-color: #df2da3;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
}

.genre-item:hover {
    cursor: pointer;
    background-color: #ff8edd;
    box-shadow: 0 0 0.5rem #fa74d8;
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
    background-color: #df5ebf;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
}

.serie-genres span:hover {
    cursor: pointer;
    background-color: #ff3bbb;
    box-shadow: 0 0 0.5rem #a54c8a;
}

.active {
    background-color: hsl(288, 85%, 41%);
    font-weight: bolder;
}

.serie-genres span.active {
    background-color: #c00080;
    color: #ffffff;
    font-weight: bolder;
}
</style>