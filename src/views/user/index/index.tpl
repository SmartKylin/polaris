<div class="userView">
  <div class="user--header">
    <Tab @change="handleChange">
      <div class="tab--item active" data-key="week">本周目标</div>
      <div class="tab--item" data-key="month">本月目标</div>
    </Tab>
    <div class="flex">
      <div class="flex-1">
        <div class="view--rate">{{aims[showWhich].probability}}%</div>
      </div>
      <div class="flex-2">
        <div class="user--header--rt">
          <span>本{{showWeek ? "周" : "月"}}目标</span>
          <span>
            <i>{{aims[showWhich].aims}}</i>
            单
          </span>
        </div>

        <div class="flex user--header-rb">
          <div class="list--item flex-1">
            <div class="list--item--count">{{aims[showWhich].carryOutAims || 0}}</div>
            <div class="list--item--name mt10">签单数量</div>
          </div>
          <div class="list--item flex-1">
            <div class="list--item--count">{{aims[showWhich].remainDay}}天</div>
            <div class="list--item--name mt10">本{{showWeek ? "周" : "月"}}剩余</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section-title mt10">待办事项</div>
  <div class="user--bd">
    <Tab @change="taskChange">
      <div class="tab--item active" :data-key="0">未完成</div>
      <div class="tab--item" :data-key="1">已完成</div>
    </Tab>
    <TodoItem v-for="task in taskList" :task="task"></TodoItem>
  </div>
  <Loadmore @reachBottom="loadmore" :visible="!allLoaded">
  </Loadmore>
</div>
