import Login from 'views/user/login'
import TentacleIndex from 'views/tentacle/index'
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
    component: TentacleIndex
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
