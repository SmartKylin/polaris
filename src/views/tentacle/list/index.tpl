<div>
  <Tab @change="queryWithStatus" v-if="!isDormant">
    <div class="tab--item" :data-key="0" :class="{active: curLevel == 0}">
      <p class="tentacleView--tabItem--cont">{{total}}</p>
      <p class="tentacleView--tabItem--name">全部</p>
    </div>
    <div class="tab--item" v-for="(level, i) in categories" :class="{active: (i+1 === curLevel)}" :data-key="(i+1)">
      <p class="tentacleView--tabItem--cont">{{level.val}}</p>
      <p class="tentacleView--tabItem--name">{{level.name}}</p>
    </div>
  </Tab>
  <TentacleBar v-for="tent in dataList" :data="tent" :datakey="tent.code"/>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded">
    <div v-if="allLoaded">
      已经到底了，触点数不够？
      <router-link to="/tentacle/list?label=2,6" :replace="true" tag="div"  v-if="isFromTabA">看看"B-高"触点有没有新单吧</router-link>
      <router-link to="/tentacle/commonality" class="button--large" :replace="true" tag="div" v-if="isFromTabB">去公海认领触点</router-link>
    </div>
  </Loadmore>


</div>
