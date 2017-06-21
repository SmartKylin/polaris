<div>

  <Tab @change="queryWithStatus">
    <div class="tab--item">
      <p class="tentacleView--tabItem--cont">{{total}}</p>
      <p class="tentacleView--tabItem--name">全部</p>
    </div>
    <div class="tab--item" v-for="(level, i) in categories" :class="{active: (i+1 === curLevel)}" :data-key="(i+1)">
      <p class="tentacleView--tabItem--cont">{{level.val}}</p>
      <p class="tentacleView--tabItem--name">{{level.name}}</p>
    </div>
  </Tab>
  <TentacleBar v-for="tent in dataList" :data="tent" :datakey="tent.code"/>
  <Loadmore2 @reachBottom="loadmore" :allLoaded="true">
    <div>
      已经到底了，触点数不够？去看看
      <router-link to="/tentacle/list?label=102,206" :replace=true>"B-高"触点有没有新单</router-link>
      吧！
    </div>
  </Loadmore2>
</div>
