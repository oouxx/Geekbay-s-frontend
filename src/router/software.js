import layout from '../views/layout/layout'
import softwareList from '../views/software/index'
import softwareDetail from '../views/software/details'

const softwareRouter = {
    path: '/software',
    component: layout,
    redirect: '/software/All',
    children: [
      {
        path: 'All',
        component: softwareList
      },
      {
        path: ':type',
        component: softwareList
      },
      {
        path: 'details/:id',
        component: softwareDetail
      }
    ]
  }

  export default softwareRouter