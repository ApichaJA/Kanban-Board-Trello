import Vue from 'vue'
import Router from 'vue-router'
import signin from './components/signin.vue'
import KanbanRow from './components/KanbanRow.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'signin',
            component: signin
        },
        {
            path: '/KanbanRow',
            name: 'KanbanRow',
            component: KanbanRow
        },

    ],
})