import VueRouter from 'vue-router'
import Table from './components/Table.vue'
import ReverseTable from './components/ReverseTable.vue'

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
      path: '/reverse-table',
      name: 'reverse-table',
      component: ReverseTable,
    },
  ],
})

export default router
