<div>
  <div class="user--header">
    <Tab @change="handleChange">
      <div class="tab--item active">本周目标</div>
      <div class="tab--item">本月目标</div>
    </Tab>
    <div class="flex">
      <div class="flex-1">
        <div class="view--rate">86%</div>
      </div>
      <div class="flex-2">
        <div class="user--header--rt">
          <span>本周目标</span>
          <span>
            <i>10</i>
            单</span>
        </div>

        <div class="flex user--header-rb">
          <div class="list--item flex-1">
            <div class="list--item--count">1</div>
            <div class="list--item--name mt10">签单数量</div>
          </div>
          <div class="list--item flex-1">
            <div class="list--item--count">3天</div>
            <div class="list--item--name mt10">本周剩余</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="user--bd">
    <div class="user--bd--title">待办事项</div>
    <TodoItem v-for="i in [1, 2, 3, 4]"></TodoItem>
  </div>
</div>
