<div>
  <div class="tentacleDetail--tab mt10" @click="selectLabel($event)">
    <div class="tentacleDetail--tabItem active">
      <p class="tentacleDetail--tabItem--name">拜访记录</p>
    </div>
    <div class="tentacleDetail--tabItem">
      <p class="tentacleDetail--tabItem--name">操作记录</p>
    </div>
  </div>

  <div class="visit--record">
      <div class="visit--record--top pd20">
        <div class="todo--item">
          <div class="todo--left">
            <div class="pb5 color-gray font-12">距离截止还有3天</div>
            <div class="pb5">回访，并且进行逼单</div>
            <div class="pb5 color-gray font-12">
              触点
              <span>张珊（一级-A-高）</span>
            </div>
          </div>
          <div class="todo--right">
            <a href="javascript:;" @click="alert" class="tentacle--listItem--btn">完成</a>
            <div class="tentacle--listItem--btn" @click="visible2=true">未完成</div>
          </div>
        </div>
        <Popup v-model="visible1">
          <div class="popup-plan popup--layer">
            <div>查看详情</div>
            <div>返回首页</div>
          </div>
        </Popup>
        <Popup v-model="visible2">
          <div class="popup-logger popup--layer">
            <Datepicker slot="body" placeholder="修改择预约日期" v-model="date"/>
            <textarea name="" id="" cols="30" rows="10">失败原因</textarea>
            <button>删除待办事项</button>
          </div>
        </Popup>
    </div>

  </div>
</div>
