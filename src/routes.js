import Login from 'views/user/login'
import TentacleIndex from 'views/tentacle/index'
import TentacleList from 'views/tentacle/list'
import TentacleSearch from 'views/tentacle/search'

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
    path: '/clue',
    component: ClueIndex
  },
  {
    path: '/user',
    component: UserIndex
  }
]
