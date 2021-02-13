import VueRouter from 'vue-router'
import Table from './components/Table.vue'
import Info from './components/Info.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/table',
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
      props: true,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
  ],
})

export default router
