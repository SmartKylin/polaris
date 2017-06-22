<div>
  <TentacleBar :hasOwner="false" v-for="tent in tentacleList" :data="tent"/>
  <Loadmore @reachBottom="loadmore" :allLoaded="allLoaded">
    已经到底了，亲，不要再拉了
  </Loadmore>
</div>
