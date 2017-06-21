<div>
  <SearchBar></SearchBar>
  <Tab @change="queryWithStatus">
    <div class="tab--item" v-for="(level, i) in categories" :class="{active: (i+1 === curLevel)}" :data-key="(i+1)">
      <p class="tentacleView--tabItem--cont">{{level.val}}</p>
      <p class="tentacleView--tabItem--name">{{level.name}}</p>
    </div>
  </Tab>
  <Tab @change="queryWithStatus">
    <div class="tab--item active" data-key="206">高产</div>
    <!--<div class="tab&#45;&#45;item">中产</div>-->
    <div class="tab--item" data-key="207">低产</div>
    <div class="tab--item" data-key="all">全部</div>
  </Tab>
  <Tab @change="queryWithStatus">
    <div class="tab--item active" data-key="101">A类</div>
    <div class="tab--item" data-key="102">B类</div>
    <div class="tab--item" data-key="103">C类</div>
    <div class="tab--item" data-key="104">D类</div>
    <div class="tab--item" data-key="dormant">休眠</div>
  </Tab>
  <TentacleBar v-for="tent in dataList" :data="tent" :datakey="tent.code"/>
  <Loadmore2 @reachBottom="loadmore" :allLoaded="allLoaded">
    已经到底了，触点数不够？去看看"B-高"触点有没有新单吧！
  </Loadmore2>
</div>
