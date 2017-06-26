<div>
  <Tab @change="handleChange">
    <div class="tab--item active" data-key="visit">拜访记录</div>
    <div class="tab--item" data-key="operation">操作记录</div>
  </Tab>
  <!----------------------------拜访记录内容------------------->
  <div class="visit--log" v-show="showWhich=='visit'">
    <!--触点待办事项列表-->
    <div class="visit--log--top pd10">
      <div class="todo--item flex" v-for="plan in data.backlog">
        <div class="todo--left">
          <div class="pb5 color-gray font-12">{{plan.planTime}}</div>
          <div class="pb5 mt10">{{plan.content}}</div>
          <div class="pb5 color-gray font-12 mt10">
            触点
            <span>{{data.name}}（{{data.label[0]}}-{{data.label[1]}}-{{data.label[2]}}）</span>
          </div>
        </div>
        <div class="todo--right">
          <div @click="accomplishTaskHandler(plan.id)" class="button--small" v-if="plan.isAccomplish == 0">完成</div>
          <div class="button--small bg-gray" @click="visible2=true" v-if="plan.isAccomplish == 1">已完成</div>
          <div class="button--small bg-gray" @click="visible2=true" v-if="plan.isAccomplish == 2">已关闭</div>
        </div>
      </div>

      <Popup v-model="visible1">
        <div class="popup-plan popup--layer">
          <textarea name="" id="" cols="30" rows="5" class="text--area" placeholder="备注" v-model="remark"></textarea>
          <div class="button--large mt20" @click="postTodoEdit">提交</div>
        </div>
      </Popup>
     <!-- <Popup v-model="visible2">
        <div class="popup-logger popup&#45;&#45;layer">
          <Cell title="修改预约日期">
            <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"/>
          </Cell>
          <textarea name="" id="" cols="30" rows="5" placeholder="失败原因" class="text&#45;&#45;area"></textarea>
          <div class="button&#45;&#45;large mt5">删除待办事项</div>
        </div>
      </Popup>-->
    </div>
    <!--拜访日志-->
    <div class="visit--log--bottom">
      <div class="flex item--wrap" v-for="visit in visitList">
        <div class="log--left ml20">
          <span class="time--span">{{visit.localDate}}</span>
          <span class="boll"></span>
          <span class="time--span">{{visit.localTime}}</span>
        </div>
        <div class="log--right ml20 flex-1">
          <div>{{visit.staffName}},第{{visit.id}}次拜访</div>
          <div class="log--right--remark mt10">备注：{{visit.content}}</div>
        </div>
      </div>
    </div>
  </div>

  <!----------------------------操作记录内容--------------------->
  <div class="operation--log" v-show="showWhich=='operation'">
    <!--触点操作日志-->
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
