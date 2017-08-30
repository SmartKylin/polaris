<div class="mbo">
  <CellGroup class="mb10 page--switcher">
    <Tab @change="changeGoalStatus">
      <div class="tab--item" data-key="setting" :class="{active: status == 'setting'}">目标设置</div>
      <div class="tab--item" data-key="review" :class="{active: status == 'review'}">目标复盘</div>
    </Tab>
  </CellGroup>
  <!--月份选择器-->
  <transition name="fade">
    <div class="months--group" v-show="monthSelectorVisible">
      <span v-for="m in months" class="month--item" @click="selectMonth(m)" :class="{'active': month == m}">{{m}}</span>
    </div>
  </transition>
  <!--周选择器-->
  <CellGroup class="mb10 mt50" v-if=weeks.length>
    <transition name="fade">
      <div class="flex bg-white week--switch" v-show="!monthSelectorVisible">
        <div class="tab--item switch--right flex-center">
          <div class="month--icon font-12"></div>
          {{month}}
        </div>
        <!--<div class="tab&#45;&#45;item switch&#45;&#45;left flex-center">{{month}}</div>-->
        <Tab @change="changeCurWeek" class="switch--middle">
          <div class="tab--item" v-for="(w, ind) in weeks" :data-key="ind" :class="{active: curWeek == w}">
            <div class="mb10 font-16">Week{{ind+1}}</div>
            <div class="font-12 color-gray" v-if="w.open_status == 0">未开放</div>
            <div class="font-12 color-gray" v-if="w.open_status == 1">已开放</div>
            <div class="font-12 color-gray" v-if="w.open_status == 2">已关闭</div>
          </div>
        </Tab>
        <!--<div class="tab&#45;&#45;item switch&#45;&#45;right flex-center" @click="monthSelectorVisible = true">
          <div class="month&#45;&#45;icon"></div>
          更多
        </div>-->
        <div class="tab--item switch--left flex-center font-12" @click="monthSelectorVisible = true" v-show="!monthSelectorVisible">更多</div>
      </div>
    </transition>
  </CellGroup>
  <!--设置或者复盘进度显示栏-->
  <CellGroup class="steps--bar bg-white" v-if="status == 'setting'">
    <!-- <el-steps :active="!aims_info ? 0 : aims_info.status" :align-center="true" :center="true" processStatus="process" finishStatus="success"> -->
    <el-steps :active="!aims_info ? 0 : parseInt(aims_info.status)" :align-center="true" :center="true" processStatus="finish" finishStatus="process">
      <el-step title="目标待预设"></el-step>
      <el-step title="待完善"></el-step>
      <el-step title="设置完成"></el-step>
    </el-steps>
  </CellGroup>
  <CellGroup class="steps--bar bg-white" v-if="status == 'review'">
    <el-steps :active="curWeek.step" :align-center="true" :center="true" finishStatus="success" processStatus="process">
      <el-step title="未设置目标"></el-step>
      <el-step title="待复盘"></el-step>
      <el-step title="复盘完成"></el-step>
    </el-steps>
  </CellGroup>
  <!--设置和复盘控制区域-->
  <CellGroup class="bg-white mt10 setting--area" :class="{'mb50': status == 'setting'}">
    <div class="setting--period color-gray mt10 mb10">
      {{status == 'setting' ? '目标设置' : '总结提交'}}开放时间段 周五18:00-周日24:00
    </div>
    <!-- 倒计时区域 -->
    <span class="mb10" v-if="status == 'setting'">
      <span v-if="curWeek.open_status == 1">
        剩余
        <span v-for="(count, ind) in countDown">
          <span class="time--cell">{{count}}</span>
          <span v-if="ind !== 2" class="mr5">:</span>
        </span>
      </span>
      <span v-if="curWeek.open_status == 0">未开放</span>
      <span v-if="curWeek.open_status == 2">已结束</span>
    </span>
    
    <div class="goal--box mb10 mt10">
      <div v-if="curWeek.open_status == 0" class="setting-status color-blue">未开放</div>
      <div v-if="curWeek.open_status == 1" class="setting-status">
          <div v-if="!aims_info || aims_info.status == 0">待预设</div>
          <div v-if="aims_info.status == 1">待完善</div>
          <div v-if="aims_info.status == 2" class="font-16">{{aims_info.final_amount}}万</div>
      </div>
      <div v-if="curWeek.open_status == 2" class="setting-status color-red">{{aims_info.amount||'未设置'}}</div>
      <div class="font-12 mt30">签约金额:周目标</div>
    </div>
    <div v-if="status == 'review'>本周实际签约金额万</div>
    <div class="setting--statistic mt30" v-if="status == 'setting'">
      <div class="color-orange">
        <div class="mb10 font-16">{{num.not_set}}</div>
        <div class="mb30 font-16">未设置人数</div>
      </div>
      <div class="color-blue">
        <div class="mb10 font-16">{{num.re_set}}</div>
        <div class="mb30 font-16">已设置人数</div>
      </div>
     <!--  <div>
        <div class="mb10">
          <div v-if="curWeek.open_status == 1">
            <span v-for="(count, ind) in countDown">
              <span class="time--cell">{{count}}</span>
              <span v-if="ind !== 2" class="mr5">:</span>
            </span>
          </div>
          <div v-if="curWeek.open_status == 0">未开放</div>
          <div v-if="curWeek.open_status == 2">已结束</div>
        </div>
        <div class="mb5">距设置截止时间</div>
      </div> -->
    </div>
  </CellGroup>
  <CellGroup v-show="status == 'review'">
    <Cell title="个人分析" content="展开" arrow></Cell>
    <CellGroup v-show="analysisVisible == true">
      <div class="add--textarea--wrap">
        <textarea name="" id="" cols="3" rows="4" class="add--text--area" maxlength="500" :value="personalAnalysis"
                  disabled></textarea>
        <div class="textarea--length">{{personalAnalysis.length}}/500</div>
      </div>
    </CellGroup>
    <Cell title="组长分析" content="展开" arrow></Cell>
    <CellGroup v-show="analysisVisible == true">
      <div class="add--textarea--wrap">
        <textarea name="" id="" cols="3" rows="4" class="add--text--area" maxlength="500" :value="leaderAnalysis"
                  disabled></textarea>
        <div class="textarea--length">{{leaderAnalysis.length}}/500</div>
      </div>
    </CellGroup>
  </CellGroup>
  <CellGroup v-show="status == 'review'" class="mb50">
    <div class="add--textarea--wrap">
      <div class="textarea--title">复盘总结</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="还未到开放时间，暂不能编辑提交~" maxlength="500"
                v-model="summarize"></textarea>
      <div class="textarea--length">{{summarize.length}}/500</div>
    </div>
  </CellGroup>
  <router-link :to="'/user/add-goal?whichStep=1&startTime='
   + startTime +
  '&endTime='
   + endTime"
    v-if="curWeek.open_status == 1 && (aims_info.status == 0 || !aims_info)" replace>
    <div class="button--large">去设置目标</div>
  </router-link>
  
  <router-link :to="'/user/add-goal?whichStep=2&startTime='
                 + startTime +
                 '&endTime='
                 + endTime +
                 '&analysis='
                 + aims_info.analysis +
                 '&amount='
                  + aims_info.amount +
                 '&createdTime='
                 + createdTime +
                 '&startTimeStamp='
                 + curWeek.start_time +
                 '&endTimeStamp='
                 + curWeek.end_time +
                 '&id='
                 + aims_info.id
                 "
               v-if="curWeek.open_status == 1 && aims_info.status == 1" replace>
    <div class="button--large">去完善目标</div>
  </router-link>
  <div class="button--large" v-show="status == 'review'">提交复盘总结</div>
</div>
