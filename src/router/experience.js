import layout from '../views/layout/layout'
import experienceList from '../views/experience/index'
import experienceDetail from '../views/experience/details'
import experienceEditor from '../views/experience/editor'

const experienceRouter = {
    path: '/experience',
    component: layout,
    children: [
      {
        path: 'details/:id',
        component: experienceDetail
      },
      {
        path: 'list',
        component: experienceList
      },
      {
        path: 'edit',
        component: experienceEditor
      }
    ]
  }

  export default experienceRouter