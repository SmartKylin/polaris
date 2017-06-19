import Login from 'views/user/login'
import TentacleIndex from 'views/tentacle/index'
import TentacleList from 'views/tentacle/list'
import TentacleSearch from 'views/tentacle/search'
import TentacleSearchResult from 'views/tentacle/searchresult'
import TentacleDetail from 'views/tentacle/detail'
import TentacleAdd from 'views/tentacle/add'
import TentacleSea from 'views/tentacle/sea'
import TentacleDetailAchieve from 'views/tentacle/detail/achieve'
import TentacleDetailDescription from 'views/tentacle/detail/description'
import TentacleDetailLogger from 'views/tentacle/detail/logger'
import TentacleDetailInfo from 'views/tentacle/detail/info'

import ClueIndex from 'views/clue/index'
import ClueDetail from 'views/clue/detail'
import ClueEdit from 'views/clue/edit'
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
    path: '/tentacle/detail',
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
    component: ClueEdit
  },
  {
    path: '/clue/:id(\\d+)',
    component: ClueDetail
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
