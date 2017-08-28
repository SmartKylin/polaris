<div class="user--index">
  <router-link to="/user/mbo">
    <div class="CellBox">
      <div class="Cell smart-border-bottom">
        <div class="goal--icon"></div>
        <div class="Cell--hd">
          <span class="Cell--title" :class="{'flag--undo': status == 1}">目标管理</span>
        </div>
        <i class="Cell--arrow"></i>
      </div>
    </div>
  </router-link>
  
  <router-link to="/user/todolist">
    <div class="CellBox">
      <div class="Cell smart-border-bottom">
        <div class="todo--icon"></div>
        <div class="Cell--hd">
          <span class="Cell--title">待办事项</span>
        </div>
        <i class="Cell--arrow"></i>
      </div>
    </div>
  </router-link>
</div>
