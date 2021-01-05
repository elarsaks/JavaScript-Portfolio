import VueRouter from 'vue-router'
import Table from './components/Table.vue'

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
      path: '/reverse',
      name: 'reverse-table',
      component: Table,
    },
  ],
})

export default router
