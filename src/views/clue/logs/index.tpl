<div>
  <div class="clueLog--log" v-for="data in dataList">
    <div class="clueLog--log--hd">{{data.typeName}} - {{data.createdBy}} - {{data.createdTime}}</div>
    <div class="clueLog--log--remark">{{data.message}}</div>
  </div>
</div>
