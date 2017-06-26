<div>
  <CellGroup>
    <Cell v-if="task.sketch" :title="task.sketch" content="查看触点信息" @click="routerToDetail" arrow>
    </Cell>
    <Field label="任务标题" type="text" align="right" v-model="task.title"></Field>
    <Cell title="任务时间" arrow @click="openDatepicker" :content="task.plan_time"></Cell>
    <div class="textareaBox">
      <textarea placeholder="备注" v-model="content"></textarea>
    </div>
  </CellGroup>
  <div class="footer--btn--group">
    <div class="button--small mr10">修改</div>
    <div class="button--small mr10">任务已完成</div>
    <div class="button--small mr10">关闭任务</div>
  </div>
</div>
