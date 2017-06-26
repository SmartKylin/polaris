<div>
  <TentacleBar :data="data"/>
  <div class="detail--group">
    <router-link :to="'/tentacle/detail/' + id +'/achieve'" :replace="true">业绩数据</router-link>
    <router-link :to="'/tentacle/detail/' + id +'/logger'" :replace="true">管理日志</router-link>
    <router-link :to="'/tentacle/detail/' + id +'/description'" :replace="true">触点画像</router-link>
    <router-link :to="'/tentacle/detail/' + id +'/info'" :replace="true">基本信息</router-link>
  </div>
  <router-view :data="data"></router-view>
</div>
