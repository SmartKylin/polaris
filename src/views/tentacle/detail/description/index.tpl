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
  <!--<div class="mb10">
    <div class="descrip&#45;&#45;title">兴趣爱好</div>
    <div class="text&#45;&#45;wrap">
      <textarea name="" cols="43" rows="5" class="text&#45;&#45;area" v-model="data.hobby" placeholder="请输入兴趣爱好">
    </textarea>
    </div>
  </div>
  <div class="descrip&#45;&#45;wrap">
    <div class="descrip&#45;&#45;title">备注</div>
    <div class="text&#45;&#45;wrap">
      <textarea name="" cols="30" rows="5" class="text&#45;&#45;area" v-model="data.remark" placeholder="请输入备注信息"></textarea>
    </div>
  </div>-->
  <CellGroup>
    <div class="add--textarea--wrap">
      <div class="textarea--title">兴趣爱好</div>
      <textarea name="" cols="3" rows="4" class="add--text--area" placeholder="(选填)" maxlength="200" v-model="hobby"></textarea>
      <div class="textarea--length">{{hobby.length}}/200</div>
    </div>
  </CellGroup>
  <CellGroup>
    <div class="add--textarea--wrap mb50">
      <div class="textarea--title">备注</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="(选填)" maxlength="100" v-model="remark"></textarea>
      <div class="textarea--length">{{remark.length}}/100</div>
    </div>
  </CellGroup>
  <div class="button--large btn--fixed" @click="tentacleEdit">提交</div>
</div>
