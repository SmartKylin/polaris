<div>
  <TentacleBar :hasOwner="false" v-for="tent in tentacleList" :data="tent" :channelId="tent.id"/>
  <Loadmore @reachBottom="loadmore" :allLoaded="allLoaded">
    已经到底了，亲~~
  </Loadmore>
  <div v-if="tentacleList.length == 0" class="nodata">
    公海暂时中没有触点
    <router-link to="/tentacle">返回触点首页</router-link>
  </div>
</div>
