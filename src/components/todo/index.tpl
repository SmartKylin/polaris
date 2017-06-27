<div class="todo--item" @click="toTaskDetail">
  <div class="todo--item--bd">
    <div class="pb5 color-gray font-12" v-if="task.isRemind == 0">{{task.planTime}}</div>
    <div class="todo--item--title">{{task.title}}</div>
    <div class="todo--item--cont font-12">{{task.brief}}</div>
  </div>
</div>
