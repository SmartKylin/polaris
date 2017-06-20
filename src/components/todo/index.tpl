<div class="todo--item">
  <div class="todo--left">
    <div class="pb5 color-gray font-12">距离截止还有3天</div>
    <div class="pb5 mt10">回访，并且进行逼单</div>
    <div class="pb5 color-gray font-12 mt10">
      触点
      <span>张珊（一级-A-高）</span>
    </div>
  </div>
  <div class="todo--right">
    <a href="javascript:;" @click="alert" class="tentacle--listItem--btn">完成</a>
    <div class="tentacle--listItem--btn" @click="visible2=true">未完成</div>
  </div>
  <Popup v-model="visible1">
    <div class="popup-plan popup--layer">
      <div>查看详情</div>
      <div>返回首页</div>
    </div>
  </Popup>
  <Popup v-model="visible2">
    <div class="popup-logger popup--layer">
      <Cell title="修改预约日期">
        <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"/>
      </Cell>
      <textarea name="" id="" cols="30" rows="5" placeholder="失败原因" class="text--area"></textarea>
      <div class="tentacle--btn">删除待办事项</div>
    </div>
  </Popup>
</div>
