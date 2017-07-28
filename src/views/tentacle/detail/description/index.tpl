<div class="mt10 detail--desc" v-if="data.id">
  <div class="mb10" v-if="data.label">
    <div class="descrip--title">评价标签</div>
    <div class="descrip--bd" @click="selectLabel($event)">
      <div class="flex">
        <div class="label--desc">关系标签</div>
        <div class="labels--wrap">
          <span v-for="rela in labRelaList" :class="{active: rela.name === data.label[0]}" :data-key="rela.id" v-if="!!data.label">{{rela.name}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="mb10">
    <div class="descrip--title">兴趣爱好</div>
    <div class="text--wrap">
      <textarea name="" cols="43" rows="5" class="text--area" v-model="data.hobby" placeholder="请输入兴趣爱好">
    </textarea>
    </div>
  </div>
  <div>
    <div class="descrip--title">备注</div>
    <div class="text--wrap">
      <textarea name="" cols="30" rows="5" class="text--area" v-model="data.remark" placeholder="请输入备注信息"></textarea>
    </div>
  </div>
  <div class="button--large" @click="tentacleEdit">提交</div>
</div>
