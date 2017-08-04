<div>
  <TentacleBar :data="data" v-if="data" :channelId="data.id"/>
  <div class="detail--group">
    <router-link :to="'/tentacle/detail/achieve/' + id" :replace="true">业绩数据</router-link>
    <router-link :to="'/tentacle/detail/logger/' + id" :replace="true">管理日志</router-link>
    <router-link :to="'/tentacle/detail/description/' + id" :replace="true">触点画像</router-link>
    <router-link :to="'/tentacle/detail/info/' + id" :replace="true">基本信息</router-link>
  </div>
  <router-view :data="data" v-if="data"></router-view>
</div>
