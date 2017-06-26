<div class="todo--item" @click="toTaskDetail">
  <div class="todo--item--bd">
    <div class="pb5 color-gray font-12" v-if="task.isRemind == 0">{{task.planTime}}</div>
    <div class="todo--item--title">{{task.title}}</div>
    <div class="todo--item--cont font-12">{{task.brief}}</div>
  </div>

  <!--<div class="todo&#45;&#45;item&#45;&#45;ft">
   &lt;!&ndash; <template v-if="task.isAccomplish == 0">
      <div @click.stop="accomplishTask" class="ml5 button&#45;&#45;small bg-green">完成</div>
      <div class="ml5 button&#45;&#45;small bg-red" @click.stop="closeTask">关闭</div>
    </template>&ndash;&gt;
    <div class="ml5 button&#45;&#45;small bg-gray" v-if="task.isAccomplish == 0">未完成</div>
    <div class="ml5 button&#45;&#45;small bg-gray" v-if="task.isAccomplish == 1">已完成</div>
    <div class="ml5 button&#45;&#45;small bg-gray" v-if="task.isAccomplish == 2">已关闭</div>
  </div>-->
 <!-- <Popup v-model="visible1">
    <div class="popup-plan popup&#45;&#45;layer">
      <div>查看详情</div>
      <div>返回首页</div>
    </div>
  </Popup>
  <Popup v-model="visible">
    <div class="popup--layer">
      <textarea name="" id="" cols="30" rows="5" placeholder="备注" class="text--area" v-model="remark"></textarea>
    </div>
    <div class="button--large" @click="postEditTask">提交</div>
  </Popup>
  -->
</div>
