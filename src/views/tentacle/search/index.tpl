<div>
  <SearchBar></SearchBar>
  <LevelOverview/>
  <Tab @change="handleChange">
    <div class="tab--item active" data-key="206">高产</div>
    <!--<div class="tab&#45;&#45;item">中产</div>-->
    <div class="tab--item" data-key="207">低产</div>
    <div class="tab--item">全部</div>
  </Tab>
  <Tab @change="handleChange">
    <div class="tab--item active" data-key="101">A类</div>
    <div class="tab--item" data-key="102">B类</div>
    <div class="tab--item" data-key="103">C类</div>
    <div class="tab--item" data-key="104">D类</div>
    <div class="tab--item">休眠</div>
  </Tab>
  <TentacleBar v-for="tent in data.list" :data="tent" :datakey="tent.code"/>
</div>
