<div class="mbo">
  <CellGroup class="mt10">
    <Tab @change="changeGoalStatus">
      <div class="tab--item active" data-key="setting">目标设置</div>
      <div class="tab--item" data-key="review">目标复盘</div>
    </Tab>
  </CellGroup>
  <!--月份选择器-->
  <transition name="fade">
    <div class="months--group" v-show="monthSelectorVisible">
      <span v-for="m in months" class="month--item" @click="selectMonth(m)" :class="{'active': month == m}">{{m}}</span>
    </div>
  </transition>
  <!--周选择器-->
  <transition name="fade">
    <div class="flex bg-white week--switch" v-show="!monthSelectorVisible">
      <div class="tab--item switch--left flex-center">{{month}}</div>
      <Tab change="changeCurWeek">
        <div class="tab--item" v-for="w in weeks">
          <div class="mb10 font-16">{{w.name}}</div>
          <div class="font-12 color-gray">{{w.statusName}}</div>
        </div>
      </Tab>
      <div class="tab--item switch--right flex-center" @click="monthSelectorVisible = true">
        <div class="month--icon"></div>
        更多
      </div>
    </div>
  </transition>
  <!--设置或者复盘进度显示栏-->
  
  <div v-show="status == 'setting'">
    设置
  </div>
  <div v-show="status == 'review'">
    复盘
  </div>
</div>
