<div class="organ-add">
  <Field label="机构名称" type="text" placeholder="请输入机构名" align="right" v-model="organ" class="mt10"></Field>
  <div class="btn--wrap">
    <div class="btn--addorgan" :class="{'active': btnSubmitActive}" @click="organAdd">提交</div>
  </div>
</div>


