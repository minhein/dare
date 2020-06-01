import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blusher from './views/Blusher.vue'
import Brushes from './views/Brushes.vue'
import Mascara from './views/Mascara.vue'
import Perfume from './views/Perfume.vue'
import Hair from './views/Hair.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blusher',
            name: 'blusher',
            component: Blusher
        },
        {
            path: '/brushes',
            name: 'brushes',
            component: Brushes
        },
        {
            path: '/mascara',
            name: 'mascara',
            component: Mascara
        },
        {
            path: '/perfume',
            name: 'perfume',
            component: Perfume
        },
        {
            path: '/hair',
            name: 'hair',
            component: Hair
        }
    ]
})
