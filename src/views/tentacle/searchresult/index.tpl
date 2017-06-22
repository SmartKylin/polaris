<div>
  <div class="tentacleView--top">
    <div class="tentacleView--search">
      <router-link to="/tentacle/searchresult">
        <input class="tentacleView--search--ipt" type="text" placeholder="输入姓名等关键词搜索触点..." v-model="search">
      </router-link>
    </div>
    <div class="tentacleView--query" @click="query">查询</div>
  </div>
  <TentacleBar v-for="tent in data.list" :data="tent"/>
</div>
