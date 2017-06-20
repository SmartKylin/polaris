<div>
  <TentacleBar :data="data"/>
  <div class="detail--group">
    <router-link to="/tentacle/detail/achieve" :replace="true">业绩数据</router-link>
    <router-link to="/tentacle/detail/logger" :replace="true">管理日志</router-link>
    <router-link to="/tentacle/detail/description" :replace="true">触点画像</router-link>
    <router-link to="/tentacle/detail/info" :replace="true">基本信息</router-link>
  </div>
  <router-view :data="data"></router-view>
</div>
