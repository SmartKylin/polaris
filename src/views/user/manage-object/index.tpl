<div class="mbo">
  <CellGroup class="mb10 page--switcher">
    <Tab @change="changeGoalStatus">
      <div class="tab--item title" data-key="setting" :class="{active: status == 'setting', 'flag--undo': settingHasDot == 1}">目标设置</div>
      <div class="tab--item title" data-key="review" :class="{active: status == 'review', 'flag--undo': replayHasDot == 1}">目标复盘</div>
    </Tab>
  </CellGroup>
  <div v-if="weeks.length">
    <!--月份选择器-->
    <transition name="fade">
      <div class="months--group" v-show="monthSelectorVisible">
        <div class="months--item--wrap">
          <span v-for="m in months" class="month--item" @click="selectMonth(m)" :class="{'active': month == m}">{{m}}月</span>
        </div>
        <div class="cancel--btn" @click="monthSelectorVisible = false"></div>
      </div>
    </transition>
    <!--周选择器-->
    <CellGroup class="mb10" :class="{'mt50': !monthSelectorVisible}" v-if=weeks.length>
      <transition name="fade">
        <div class="flex bg-white week--switch" v-show="!monthSelectorVisible">
          <div class="tab--item switch--right flex-center">
            <div class="month--icon font-12"></div>
            {{month}}月
          </div>
          <Tab @change="changeCurWeek" class="switch--middle">
            <div class="tab--item" v-for="(w, ind) in weeks" :data-key="ind" :class="{active: curWeek == w}">
              <div class="mb10 font-16">Week{{ind+1}}</div>
              <div class="font-12 color-gray" v-if="w.open_status == 0">未开放</div>
              <div class="font-12 color-gray" v-if="w.open_status == 1">已开放</div>
              <div class="font-12 color-gray" v-if="w.open_status == 2">已关闭</div>
            </div>
          </Tab>
          <div class="tab--item switch--left flex-center font-12" @click="selectMoreMonth" v-show="!monthSelectorVisible">更多</div>
        </div>
      </transition>
    </CellGroup>
    <!--设置或者复盘进度显示栏-->
    <CellGroup class="steps--bar bg-white" v-if="status == 'setting'">
      <!-- <el-steps :active="!aims_info ? 0 : aims_info.status" :align-center="true" :center="true" processStatus="process" finishStatus="success"> -->
      <el-steps :active="!aims_info ? 0 : parseInt(aims_info.status)" :align-center="true" :center="true" processStatus="finish" finishStatus="finish">
        <el-step title="目标待预设"></el-step>
        <el-step title="待完善"></el-step>
        <el-step title="设置完成"></el-step>
      </el-steps>
    </CellGroup>
    <CellGroup class="steps--bar bg-white" v-if="status == 'review'">
      <el-steps :active="aims_info.aims_replay_status" :align-center="true" :center="true" finishStatus="finish" processStatus="finish">
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
      <span class="mb10" v-if="status == 'setting'">
        <span v-if="curWeek && curWeek.open_status == 1">
          剩余
          <span v-for="(count, ind) in countDown">
            <span class="time--cell">{{count}}</span>
            <span v-if="ind !== 2" class="mr5">:</span>
          </span>
        </span>
        <span v-if="curWeek && curWeek.open_status == 0">未开放</span>
        <span v-if="curWeek && curWeek.open_status == 2">已结束</span>
      </span>
      
      <div class="goal--box mb20 mt10">
        <div v-show="curWeek && curWeek.open_status == 0 && !(aims_info && aims_info.aims_replay_status == 0) && !(aims_info && aims_info.aims_replay_status == 1)" class="setting-status">未开放</div>
        <div v-show="curWeek && curWeek.open_status == 0 && (aims_info && aims_info.aims_replay_status == 1)" class="setting-status">{{aims_info.final_amount}}</div>
        <div v-if="curWeek && curWeek.open_status == 1" class="setting-status">
            <div v-if="!aims_info || aims_info.status == 0">待预设</div>
            <div v-if="aims_info.status == 1">待完善</div>
            <div v-if="aims_info.status == 2" class="font-16">{{aims_info.final_amount}}</div>
        </div>
        <div v-if="status == 'setting' && curWeek && curWeek.open_status == 2" class="setting-status">{{aims_info.final_amount ? aims_info.final_amount : '未设置'}}</div>
        <div v-if="status == 'review' && aims_info && aims_info.aims_replay_status == 0" class="setting-status color-red">未设置</div>
        <!--<div class="font-14 mt30">签约金额:周目标</div>-->
        <div class="font-14 mt30">个人本周目标</div>
      </div>
      <!-- <div v-if="status == 'review'" class="mt10 mb20">本周实际签约金额{{aims_info.final_amount}}万</div> -->
      <!--<div v-if="status == 'review'" class="mt10 mb20">本周实际签约金额：系统未开放</div>-->
      <div class="setting--statistic mt30" v-if="status == 'setting'">
        <div class="color-blue">
          <div class="mb10 font-16">{{num.not_set}}</div>
          <div class="mb30 font-16">未设置人数</div>
        </div>
        <div class="color-blue">
          <div class="mb10 font-16">{{num.re_set}}</div>
          <div class="mb30 font-16">已设置人数</div>
        </div>
      </div>
    </CellGroup>
  
    <!-- 未设置目标时不显示 个人分析和组长分析 -->
    <CellGroup v-if="status == 'review' && aims_info.aims_replay_status != 0">
      <Cell title="个人分析" :content="analysisVisible == true ? '收起' : '展开'" arrow @click="analysisVisible = !analysisVisible"></Cell>
      <div class="add--textarea--wrap mt0" v-show="analysisVisible == true">
        <textarea name="" id="" cols="3" rows="4" class="add--text--area" maxlength="500" :value="analysis"
                  disabled></textarea>
        <!-- <div class="textarea--length">{{analysis.length}}/500</div> -->
      </div>
      <Cell title="组长分析" :content="summaryVisible == true ? '收起' : '展开'" arrow @click="summaryVisible = !summaryVisible"></Cell>
      <div class="add--textarea--wrap mt0" v-show="summaryVisible == true">
        <textarea name="" id="" cols="3" rows="4" class="add--text--area" maxlength="500" :value="summary"
                  disabled></textarea>
        <!-- <div class="textarea--length">{{summary.length}}/500</div> -->
      </div>
    </CellGroup>
    <CellGroup v-show="status == 'review'" class="mb50">
      <div class="add--textarea--wrap">
        <div class="textarea--title">复盘总结</div>
        <div class="open--textarea" v-if="curWeek && curWeek.open_status == 1">
            <textarea v-if="aims_info && aims_info.aims_replay_status == 1" name="" id="" cols="3" rows="4" class="add--text--area" placeholder="复盘一下这周目标的实现情况吧~" maxlength="500"
            value="aims_info.replay_content || replayContent" v-model="replayContent"></textarea>
          <div v-if="aims_info && aims_info.aims_replay_status == 1" class="textarea--length">{{replayContent.length}}/500</div>
        <textarea v-if="aims_info && aims_info.aims_replay_status == 2" name="" id="" cols="3" rows="4" class="add--text--area" :value="aims_info.replay_content" disabled></textarea>
        </div>
        <div class="red--tip">
          <textarea v-if="curWeek && curWeek.open_status == 0 && aims_info.aims_replay_status != 0" name="" id="" cols="3" rows="4" class="add--text--area" placeholder="还未到开放时间，暂时不能编辑提交" disabled></textarea>
          <textarea v-if="curWeek && curWeek.open_status == 2 && aims_info.aims_replay_status != 0" name="" id="" cols="3" rows="4" class="add--text--area" placeholder="开放时间已经过了，下周记得准时提交复盘总结~" disabled></textarea>
          <textarea v-if="aims_info.aims_replay_status == 0" name="" id="" cols="3" rows="4" class="add--text--area" placeholder="本周未设置目标，不能提交复盘总结，下周记得准时设置目标~" disabled></textarea>
        </div>
      </div>
    </CellGroup>
    <router-link :to="'/user/add-goal?whichStep=1&startTime='
     + startTime +
    '&endTime='
     + endTime"
      v-if="curWeek && curWeek.open_status == 1 && (aims_info.status == 0 || !aims_info)" replace>
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
                 v-if="curWeek && curWeek.open_status == 1 && aims_info.status == 1" replace>
      <div class="button--large">去完善目标</div>
    </router-link>
    <div class="button--large" v-show="status == 'review'" v-if="curWeek && curWeek.open_status === 1 && aims_info.aims_replay_status == 1" @click="postReplayHandle">提交复盘总结</div>
  </div>
</div>
