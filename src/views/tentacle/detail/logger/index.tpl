<div>
  <Tab @change="handleChange">
    <div class="tab--item active" data-key="visit">拜访记录</div>
    <div class="tab--item" data-key="operation">操作记录</div>
  </Tab>
  <div class="visit--log" v-if="visitlogVisible">
    <div class="visit--log--top pd10">
      <TodoItem></TodoItem>
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
