<div>
  <div>
    <div class="descrip--title">评价标签</div>
    <div class="descrip--bd" @click="selectLabel($event)">
      <div class="flex">
        <div class="label--desc">关系标签</div>
        <span v-for="rela in labRelaList" :class="{active: rela.name === data.label[0]}" :data-key="rela.id" v-if="!!data.label">{{rela.name}}</span>
      </div>
      <div class="flex">
        <div class="label--desc">产能标签</div>
        <span v-for="cap in labCapaList" :class="{active: cap.name === data.label[1]}" :data-key="cap.id" v-if="!!data.label">{{cap.name}}</span>
      </div>
    </div>
  </div>
  <div>
    <div class="descrip--title">兴趣爱好</div>
    <div class="text--wrap">
      <textarea name="" cols="43" rows="5" class="text--area" v-model="data.hobby">
    </textarea>
    </div>
  </div>
  <div>
    <div class="descrip--title">备注</div>
    <div class="text--wrap">
      <textarea name="" cols="30" rows="5" class="text--area" v-model="data.remark"></textarea>
    </div>
  </div>
  <div class="button--large" @click="tentacleEdit">提交</div>
</div>
