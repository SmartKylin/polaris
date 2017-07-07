<div class="mt10 detail--desc" v-if="data.remark">
  <div class="mb10" v-if="data.label">
    <div class="descrip--title">评价标签</div>
    <div class="descrip--bd" @click="selectLabel($event)">
      <div class="flex">
        <div class="label--desc flex-1">关系标签</div>
        <div class="flex-3 labels--wrap">
          <span v-for="rela in labRelaList" :class="{active: rela.name === data.label[0]}" :data-key="rela.id" v-if="!!data.label">{{rela.name}}</span>
        </div>
      </div>
     <!-- <div class="flex">
        <div class="label&#45;&#45;desc flex-1">产能标签</div>
        <div class="flex-3 labels&#45;&#45;wrap">
          <span v-for="cap in labCapaList" :class="{active: cap.name === data.label[1]}" :data-key="cap.id" v-if="!!data.label">{{cap.name}}</span>
        </div>
      </div>-->
    </div>
  </div>
  <div class="mb10" v-if=data.hobby>
    <div class="descrip--title">兴趣爱好</div>
    <div class="text--wrap">
      <textarea name="" cols="43" rows="5" class="text--area" v-model="data.hobby">
    </textarea>
    </div>
  </div>
  <div v-if="data.remark">
    <div class="descrip--title">备注</div>
    <div class="text--wrap">
      <textarea name="" cols="30" rows="5" class="text--area" v-model="data.remark"></textarea>
    </div>
  </div>
  <div class="button--large" @click="tentacleEdit">提交</div>
</div>
