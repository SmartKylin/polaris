<div class="todo--item flex " @click="toTaskDetail">
  <div class="todo--item--bd flex-2">
    <div class="pb5 color-gray font-12">{{task.planTime}}</div>
    <div class="todo--item--title mt5">{{task.title}}</div>
    <!--<div class="mt10 font-12 color-gray">{{task.typeName}}</div>-->
    <div class="todo--item--cont font-12 color-gray mt10">{{task.brief}}</div>
  </div>

  <div class="todo--item--ft flex-1" v-if="!fromUserpage">
    <div v-if="task.isAccomplish == 0">
      <div class="ml5 button--small" @click="accomplishTaskHandler" v-if="!done">完成</div>
      <div class="ml5 button--small bg-gray" v-if="done">已完成</div>
    </div>
  </div>

  <Popup v-model="visible">
    <div class="popup-plan popup--layer">
      <textarea name="" id="" cols="30" rows="5" class="text--area" placeholder="备注" v-model="remark"></textarea>
      <div class="button--large mt20" @click="postTodoEdit">提交</div>
    </div>
  </Popup>
</div>
