<div>
  <CellGroup>
    <Cell :title="task.brief" :content="'查看' + (task.type == 1 ? '触点' : '线索') + '信息'" @click="routerToDetail" arrow>
    </Cell>
    <Field label="任务标题" type="text" align="right" v-model="task.title" placeholder="输入标题"></Field>
    <Cell title="任务时间" arrow @click="openDatepicker" :content="plan_time"></Cell>
    <div class="textareaBox">
      <textarea placeholder="备注" v-model="task.remark"></textarea>
    </div>
  </CellGroup>
  <div>
    <div v-if="isAccomplish == 0" class="footer--btn--group">
      <div class="button--small" @click="postUndoTask">保存修改</div>
      <div class="button--small" @click="postDoneTask">任务完成</div>
      <div class="button--small" @click="postCloseTask">关闭任务</div>
    </div>
  <!-- <div class="footer&#45;&#45;btn&#45;&#45;group" >
     <div class="button&#45;&#45;small mr10 bg-gray" v-if="isAccomplish == 1">已完成</div>
     <div class="button&#45;&#45;small mr10 bg-gray" v-if="isAccomplish == 2">已关闭</div>
   </div>-->
  </div>
</div>
