<div>
  <div class="tent--search--header">
    <SearchBar></SearchBar>
    <Tab @change="levelChange">
      <div class="tab--item" v-for="level in categories" :class="{active: curLevel === level.id}" :data-key="level.id">
        <p class="tentacleView--tabItem--cont">{{level.val}}</p>
        <p class="tentacleView--tabItem--name">{{level.name}}</p>
      </div>
    </Tab>
    <Tab @change="categoryChange" v-if="labRelaList.length">
      <div class="tab--item" v-for="rela in labRelaList" :data-key="rela.id" :class="{active: rela.name == 'A类'}">{{rela.name}}</div>
      <div class="tab--item" data-key="dormant">休眠</div>
    </Tab>
  </div>
  <div class="tent--list">
    <TentacleBar v-for="tent in dataList" :data="tent" :channelId="tent.id"/>
  </div>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded"></Loadmore>
</div>
