<div>
  <SearchBar></SearchBar>
  <Tab @change="levelChange">
    <div class="tab--item" v-for="level in categories" :class="{active: curLevel === level.id}" :data-key="level.id">
      <p class="tentacleView--tabItem--cont">{{level.val}}</p>
      <p class="tentacleView--tabItem--name">{{level.name}}</p>
    </div>
  </Tab>
  <Tab @change="capacityChange">
    <div class="tab--item active" data-key="5">高产</div>
    <div class="tab--item" data-key="6">低产</div>
    <div class="tab--item" data-key="all">全部</div>
  </Tab>
  <Tab @change="categoryChange">
    <div class="tab--item active" data-key="1">A类</div>
    <div class="tab--item" data-key="2">B类</div>
    <div class="tab--item" data-key="3">C类</div>
    <div class="tab--item" data-key="4">D类</div>
    <div class="tab--item" data-key="dormant">休眠</div>
  </Tab>
  <TentacleBar v-for="tent in dataList" :data="tent" :channelId="tent.id"/>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded"></Loadmore>
</div>
