import layout from '../views/layout/layout'
import questionList from '../views/question/index'
import questionDetail from '../views/question/details'
import questionEditor from '../views/question/editor'

const questionRouter = {
    path: '/question',
    component: layout,

    children: [
      {
        path: 'details/:id',
        component: questionDetail
      },
      {
        path: 'list',
        component: questionList
      },
      {
        path: 'edit',
        component: questionEditor
      }
    ]
  }

  export default questionRouter