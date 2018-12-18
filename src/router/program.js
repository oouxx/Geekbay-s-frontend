import layout from '../views/layout/layout'
import programList from '../views/program/index'
import programDetail from '../views/program/details'

const programRouter = {
    path: '/program',
    component: layout,
    redirect: '/program/All',
    children: [
      {
        path: 'All',
        component: programList
      },
      {
        path: ':type',
        component: programList
      },
      {
        path: 'details/:id',
        component: programDetail
      }
    ]
  }

  export default programRouter