<div>
  <LevelOverview/>
  <TentacleBar v-for="i in [1, 2, 3, 4, 5]"/>
  <Loadmore @reachBottom="loadmore" :allLoaded="true">
    <div>
      已经到底了，触点数不够？去看看
      <router-link to="/tentacle/list" replace=true>"B-高"触点有没有新单</router-link>
      吧！
    </div>
  </Loadmore>
</div>
