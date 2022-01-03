import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/patients/Index.vue'
import Show from '../views/patients/Show.vue'
import Create from '../views/patients/Create.vue'
import Edit from '../views/patients/Edit.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/show/:id',
        name: 'ShowPatient',
        component: Show
    },
    {
        path: '/create',
        name: 'CreatePatient',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'EditPatient',
        component: Edit
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
