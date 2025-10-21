import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useSerieStore = defineStore('serie', () => {
    const state = reactive({
    currentSerie: {},
    series: [],
    })

    const clearSeries =  async () => {
        state.series = []
    }

    const series = computed(() => state.series)
    const currentSerie = computed(() => state.currentSerie)

    const getSerieDetail = async (SerieId) => {
    const response = await api.get(`tv/${SerieId}`)
    state.currentSerie = response.data
    }

    const listSeries = async (genreId) => {
    const response = await api.get('discover/tv', {
    params: {
        with_genres: genreId,
        language: 'pt-BR',
    },
    });
    state.series = response.data.results;
    }

    return { currentSerie, getSerieDetail, listSeries, series, clearSeries }
})