<div class="add-goal">
  <CellGroup v-if="whichStep == 2">
    <Cell :title="'个人预想目标：' + amount + '万'" :content="createdTime + '提交'"></Cell>
    <Cell :title="'个人分析：' + analysis"  :content="analysisVisible ? '收起' : '显示全部'" arrow @click="showAnalysis"></Cell>
  </CellGroup>
  <CellGroup v-show="analysisVisible == true">
    <div class="add--textarea--wrap">
      <textarea name="" id="" cols="3" rows="4" class="add--text--area"  maxlength="500" :value="analysis" disabled></textarea>
      <!-- <div class="textarea--length">{{analysis.length}}/500</div> -->
    </div>
  </CellGroup>
  <Cell title="目标周期：" :content="startTime + '-' + endTime"></Cell>
  <Field v-if="whichStep == 1" type="number" label="目标签约金额(万)：" placeholder="填写个人预想目标签约金额" align="right" v-model="amount"></Field>
  <Field v-if="whichStep == 2" type="number" label="最终目标金额(万)：" placeholder="填写个人最终目标签约金额" align="right" v-model="finalAmount"></Field>
  <CellGroup v-if="whichStep == 1">
    <div class="add--textarea--wrap">
      <div class="textarea--title">个人分析</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="填一下自己为什么定这个目标，打算怎么实现吧~" maxlength="500" v-model="analysis"></textarea>
      <div class="textarea--length">{{analysis.length}}/500</div>
    </div>
  </CellGroup>
  <CellGroup v-if="whichStep == 2">
    <div class="add--textarea--wrap">
      <div class="textarea--title">与组长讨论纪要</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="填写一下组长为什么让你定这个目标，组长能给你提供什么帮助吧~" maxlength="500" v-model="summary"></textarea>
      <div class="textarea--length">{{summary.length}}/500</div>
    </div>
  </CellGroup>
  <div class="button--large submit--fixed" :class="{active: postAddBtnAvailable}" @click="postAddGoal" v-if="whichStep == 1">提交个人预想目标</div>
  <div class="button--large submit--fixed" :class="{active: postPerfectBtnAvailable}" @click="postPerfectGoal" v-if="whichStep == 2">提交最终确定目标</div>
</div>
