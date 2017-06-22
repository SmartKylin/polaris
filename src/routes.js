import Login from 'views/user/login'
import TentacleIndex from 'views/tentacle/index'
import TentacleList from 'views/tentacle/list'
import TentacleSearch from 'views/tentacle/search'
import TentacleSearchResult from 'views/tentacle/searchresult'
import TentacleDetail from 'views/tentacle/detail'
import TentacleAdd from 'views/tentacle/add'
import TentacleEdit from 'views/tentacle/edit'
import TentacleSea from 'views/tentacle/sea'
import TentacleDetailAchieve from 'views/tentacle/detail/achieve'
import TentacleDetailDescription from 'views/tentacle/detail/description'
import TentacleDetailLogger from 'views/tentacle/detail/logger'
import TentacleDetailInfo from 'views/tentacle/detail/info'

import ClueIndex from 'views/clue/index'
import ClueDetail from 'views/clue/detail'
import ClueAdd from 'views/clue/add'
import ClueEdit from 'views/clue/edit'
import ClueClose from 'views/clue/close'
import ClueLogs from 'views/clue/logs'
import PickTentacle from 'views/clue/pick-tentacle'
import TodoDone from 'views/clue/todo-done'
import UserIndex from 'views/user/index'

export default [
  {
    path: '/',
    redirect: '/tentacle'
  },

  /**
   * 触点
   * ==========================
   */
  {
    path: '/tentacle',
    component: TentacleIndex,
  },
  {
    path: '/tentacle/sea',
    component: TentacleSea
  },
  {
    path: '/tentacle/add',
    component: TentacleAdd
  },
  {
    path: '/tentacle/edit',
    name: "edittentacle",
    component: TentacleEdit
  },
  {
    path: '/tentacle/list',
    component: TentacleList
  },
  {
    path: '/tentacle/search/:level',
    component: TentacleSearch
  },
  {
    path: '/tentacle/searchresult',
    component: TentacleSearchResult
  },
  {
    // path: '/tentacle/detail/:datakey',
    path: '/tentacle/detail',
    name: "detail",
    component: TentacleDetail,
    children: [
      {
        path: '/',
        redirect: 'achieve'
      },
      {
        path: '/tentacle/detail/achieve',
        component: TentacleDetailAchieve
      },
      {
        path: 'logger',
        component: TentacleDetailLogger
      },
      {
        path: 'description',
        component: TentacleDetailDescription
      },
      {
        path: 'info',
        component: TentacleDetailInfo
      }
    ]
  },


  /**
   * 线索
   * ==========================
   */
  {
    path: '/clue',
    component: ClueIndex
  },
  {
    path: '/clue/add',
    component: ClueAdd
  },
  {
    path: '/clue/edit/:code',
    component: ClueEdit,
    children: [
      {
        path: 'pick-tentacle',
        component: PickTentacle
      }
    ]
  },
  {
    path: '/clue/close/:code',
    component: ClueClose
  },
  {
    path: '/clue/:code',
    component: ClueDetail
  },
  {
    path: '/clue/logs/:code',
    component: ClueLogs
  },
  {
    path: '/todo/close/:id',
    component: TodoDone
  },
  /**
   * 用户中心
   * ==========================
   */
  {
    path: '/user',
    component: UserIndex
  },
  {
    path: '/login',
    component: Login
  },
]
