<div>
  <div class="tentacleView--top">
    <div class="tentacleView--search">
      <router-link to="/tentacle/searchresult">
        <input class="tentacleView--search--ipt" type="text" placeholder="输入姓名，手机号，机构名称等关键词搜索触点..." v-model="search">
      </router-link>
    </div>
    <div class="tentacleView--query" @click="reQuery">查询</div>
  </div>
  <TentacleBar v-for="tent in dataList" :data="tent" :channelId="ten.id"/>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded">
    加载中...
  </Loadmore>
</div>
