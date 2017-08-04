<div class="tentacleListView">
  <Tab @change="queryWithLevel" v-if="!isDormant && categories.length > 0">
    <div class="tab--item" v-for="cate in categories" :class="{active: cate.id === curLevel}" :data-key="cate.id">
      <p class="tentacleView--tabItem--cont">{{cate.val}}</p>
      <p class="tentacleView--tabItem--name">{{cate.name}}</p>
    </div>
  </Tab>
  <TentacleBar v-for="tent in dataList" :data="tent" :channelId="tent.id"/>
  <div class="bottom-notice" v-show="allLoaded">
    没有更多触点了
    <!--<router-link to="/tentacle/list?category=b&capacity=5" :replace="true"  v-if="category === 'a'">看看"B高"触点有没有新单吧</router-link>-->
    <router-link to="/tentacle/list?category=b" :replace="true"  v-if="category === 'a'">看看"B"触点有没有新单吧</router-link>
    <router-link to="/tentacle/commonality" :replace="true" v-if="category === 'b'">去公海认领触点</router-link>
  </div>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded"></Loadmore>
</div>
