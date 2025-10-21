import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useMovieStore = defineStore('movie', () => {
    const state = reactive({
    currentMovie: {},
    movies: [],
    })

    const movies = computed(() => state.movies)
    const currentMovie = computed(() => state.currentMovie)

    const clearMovies = async () => {
    state.movies = []
    }

    const getMovieDetail = async (movieId) => {
    const response = await api.get(`movie/${movieId}`)
    state.currentMovie = response.data
    }

    const listMovies = async (genreId) => {
    const response = await api.get('discover/movie', {
        params: {
        with_genres: genreId,
        language: 'pt-BR',
        },
    });
    state.movies = response.data.results;
    }

    return { currentMovie, getMovieDetail, listMovies, movies, clearMovies }
})
