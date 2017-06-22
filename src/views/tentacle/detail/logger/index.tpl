<div>
  <Tab @change="handleChange">
    <div class="tab--item active" data-key="visit">拜访记录</div>
    <div class="tab--item" data-key="operation">操作记录</div>
  </Tab>
  <div class="visit--log" v-if="visitlogVisible">
    <div class="visit--log--top pd10">
      <TodoItem></TodoItem>

      <div class="todo--item" v-for="plan in data.backlog">
        <div class="todo--left">
          <div class="pb5 color-gray font-12">{{plan.planTime}}</div>
          <div class="pb5 mt10">{{plan.content}}</div>
          <div class="pb5 color-gray font-12 mt10">
            触点
            <span>{{data.name}}（{{data.label[0]}}-{{data.label[1]}}-{{data.label[2]}}）</span>
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
          <Cell title="修改预约日期">
            <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"/>
          </Cell>
          <textarea name="" id="" cols="30" rows="5" placeholder="失败原因" class="text--area"></textarea>
          <div class="button--large mt5">删除待办事项</div>
        </div>
      </Popup>

    </div>
    <div class="visit--log--bottom">
      <div class="flex item--wrap" v-for="visit in visitList">
        <div class="log--left">
          <span class="time--span">{{visit.localDate}}</span>
          <span class="boll"></span>
          <span class="time--span">{{visit.localTime}}</span>
        </div>
        <div class="log--right ml20">
          <div>{{visit.staffName}},第{{visit.id}}次拜访</div>
          <div class="log--right--remark mt10">备注：{{visit.content}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="operation--log" v-if="!visitlogVisible">
    <div class="flex item--wrap" v-for="operation in operationList">
      <div class="log--left">
        <!--<span class="time&#45;&#45;span">{{operation.localDate}}</span>-->
        <!--<span class="boll"></span>-->
        <!--<span class="time&#45;&#45;span">{{operation.localTime}}</span>-->
        <span class="time--span">{{operation.oper_time}}</span>
      </div>
      <div class="log--right ml20">
        <div class="mb10">{{operation.oper}},第{{operation.id}}次拜访</div>
        <div class="log--right--remark mt10">备注：{{operation.remark}}</div>
      </div>
    </div>
  </div>
</div>
