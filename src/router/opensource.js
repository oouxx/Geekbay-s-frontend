import layout from '../views/layout/layout'
import opensourceList from '../views/opensource/index'
import opensourceDetail from '../views/opensource/details'

const opensourceRouter = {
    path: '/opensource',
    component: layout,
    redirect: '/opensource/All',
    children: [
      {
        path: 'All',
        component: opensourceList
      },
      {
        path: ':type',
        component: opensourceList
      },
      {
        path: 'details/:id',
        component: opensourceDetail
      }
    ]
  }

  export default opensourceRouter