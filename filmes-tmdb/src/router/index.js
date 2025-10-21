import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    },
    {
    path: '/filmes',
    name: 'Movies',
    component: () => import('../views/MoviesView.vue'),
    },
    {
    path: '/tv',
    name: 'TV',
    component: () => import('../views/SeriesView.vue'),
    },
    {
        path: '/movie/:movieId',
        name: 'MovieDetails',
        component: () => import('../views/MovieDetailsView.vue'),
        props: true,
    },
    {
        path: '/serie/:serieId',
        name: 'SerieDetails',
        component: () => import('../views/SerieDetailsView.vue'),
        props: true,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

export default router
