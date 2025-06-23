import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/equipe',
            name: 'Team',
            component: () => import('@/views/TeamView.vue'),
        },
        {
            path: '/termos',
            name: 'Terms',
            component: () => import('@/views/TermsView.vue'),
        },
        {
            path: '/envio',
            name: 'Shipping',
            component: () => import('@/views/ShippingView.vue'),
        },
        {
            path: '/devolucoes',
            name: 'Returns',
            component: () => import('@/views/ReturnsView.vue'),
        },

        {
            path: '/livro/:id',
            name: 'book',
            component: () => import('@/views/BookView.vue'),
            props: true,
        }

    ],
})

export default router
