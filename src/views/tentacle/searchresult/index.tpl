<div>
  <div class="tentacleView--top for--fixed">
    <div class="tentacleView--search">
      <input class="tentacleView--search--ipt" type="text" placeholder="输入姓名，手机号，机构名称等搜索触点" v-model="search" autofocus>
    </div>
    <div class="tentacleView--query" @click="reQuery">查询</div>
  </div>
  <div class="search--ent--list">
    <TentacleBar v-for="tent in dataList" :data="tent" :channelId="tent.id"/>
  </div>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded">
    加载中...
  </Loadmore>
</div>
