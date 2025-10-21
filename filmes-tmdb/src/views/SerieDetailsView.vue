<script setup>
    import { defineProps, onMounted } from 'vue';
    import { useSerieStore } from '@/stores/series';

    const serieStore = useSerieStore();

    const props = defineProps({
    serieId: {
        type: Number,
        required: true,
    },
    });

    onMounted(async () => {
    await serieStore.getSerieDetail(props.serieId);
    });
</script>

<template>
    <div class="main">
    <div class="content">
        <img
        :src="`https://image.tmdb.org/t/p/w185${serieStore.currentSerie.poster_path}`"
        :alt="serieStore.currentSerie.title"
        />

        <div class="details">
        <h1>Série: {{ serieStore.currentSerie.title }}</h1>
        <p>{{ serieStore.currentSerie.tagline }}</p>
        <p>{{ serieStore.currentSerie.overview }}</p>
        <p>Orçamento: ${{ serieStore.currentSerie.budget }}</p>
        <p>Avaliação: {{ serieStore.currentSerie.vote_average }}</p>
        </div>
    </div>
    </div>

    <p>Produtoras</p>
    <div class="companies">
    <template
        v-for="company in serieStore.currentSerie.production_companies"
        :key="company.id"
    >
        <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
        />
        <p v-else>{{ company.name }}</p>
    </template>
    </div>
</template>

<style scoped>
    .companies {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
    }
</style>