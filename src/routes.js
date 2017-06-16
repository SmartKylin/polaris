import Login from 'views/user/login'
import TentacleIndex from 'views/tentacle/index'
import TentacleList from 'views/tentacle/list'
import TentacleSearch from 'views/tentacle/search'
import TentacleSearchResult from 'views/tentacle/searchresult'
import TentacleDetail from 'views/tentacle/detail'
import TentacleDetailAchieve from 'views/tentacle/detail/achieve'
import TentacleDetailDescription from 'views/tentacle/detail/description'
import TentacleDetailLogger from 'views/tentacle/detail/logger'
import TentacleDetailInfo from 'views/tentacle/detail/info'

import ClueIndex from 'views/clue/index'
import UserIndex from 'views/user/index'

export default [
  {
    path: '/',
    redirect: '/tentacle'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/tentacle',
    component: TentacleIndex,
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
        path: 'achieve',
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
  {
    path: '/clue',
    component: ClueIndex
  },
  {
    path: '/user',
    component: UserIndex
  }
]
