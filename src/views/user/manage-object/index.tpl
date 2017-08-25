<div class="mbo">
  <CellGroup class="mb10">
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
  <CellGroup class="mb10">
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
  </CellGroup>
  <!--设置或者复盘进度显示栏-->
  <CellGroup class="steps--bar bg-white" v-if="status == 'setting'">
    <el-steps :active="whichStep" :align-center="true" :center="true" processStatus="process" finishStatus="success">
      <el-step title="目标待预设"></el-step>
      <el-step title="待完善"></el-step>
      <el-step title="设置完成"></el-step>
    </el-steps>
  </CellGroup>
  <CellGroup class="steps--bar bg-white" v-if="status == 'review'">
    <el-steps :active="whichStep" :align-center="true" :center="true" finishStatus="success" processStatus="process">
      <el-step title="未设置目标"></el-step>
      <el-step title="待复盘"></el-step>
      <el-step title="复盘完成"></el-step>
    </el-steps>
  </CellGroup>
  <!--设置和复盘控制区域-->
  <CellGroup class="bg-white mt10 setting--area">
    <div class="setting--period color-gray">目标设置开放时间段 {{now}}</div>
    <div class="color-red mb5">距设置截止时间</div>
    <div class="color-red">{{countDown}}</div>
    <div class="goal--box mb10 mt10">
      <div class="mb5">签约金额</div>
      <div class="mb10">个人本周目标</div>
      <div class="setting-status color-blue">待设置</div>
    </div>
    <div class="setting--statistic mt30" v-if="status == 'setting'">
      <div class="color-orange">
        <div class="mb10 font-16">10</div>
        <div class="mb30">未设置人数</div>
      </div>
      <div class="color-green">
        <div class="mb10 font-16">80</div>
        <div class="mb30">已设置人数</div>
      </div>
    </div>
  </CellGroup>
  <CellGroup v-show="status == 'review'">
    <Cell title="个人分析" content="展开" arrow></Cell>
    <CellGroup v-show="analysisVisible == true">
      <div class="add--textarea--wrap">
        <textarea name="" id="" cols="3" rows="4" class="add--text--area"  maxlength="500" :value="personalAnalysis" disabled></textarea>
        <div class="textarea--length">{{personalAnalysis.length}}/500</div>
      </div>
    </CellGroup>
    <Cell title="组长分析" content="展开" arrow></Cell>
    <CellGroup v-show="analysisVisible == true">
      <div class="add--textarea--wrap">
        <textarea name="" id="" cols="3" rows="4" class="add--text--area"  maxlength="500" :value="leaderAnalysis" disabled></textarea>
        <div class="textarea--length">{{leaderAnalysis.length}}/500</div>
      </div>
    </CellGroup>
  </CellGroup>
  <CellGroup v-show="status == 'review'" class="mb50">
    <div class="add--textarea--wrap">
      <div class="textarea--title">复盘总结</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="还未到开放时间，暂不能编辑提交~" maxlength="500" v-model="summarize"></textarea>
      <div class="textarea--length">{{summarize.length}}/500</div>
    </div>
  </CellGroup>
  <router-link to="/user/add-goal?whichStep=1" v-if="whichStep == 1">
    <div class="button--large">去设置目标</div>
  </router-link>
  <router-link to="/user/add-goal?whichStep=2" v-if="whichStep == 2">
    <div class="button--large">去完善目标</div>
  </router-link>
  <div class="button--large" v-show="status == 'review'">提交复盘总结</div>
</div>
