<div class="organ-add">
  <Field label="机构名称" type="text" placeholder="例:我爱我家" align="right" v-model="organ"></Field>
  <div class="btn--addorgan" :class="{'active': btnSubmitActive}" @click="organAdd">提交</div>
</div>


