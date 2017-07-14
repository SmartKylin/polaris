<div v-if="data.name">
  <CellGroup>
    <Cell title="基本信息" class="info--title"></Cell>
    <Field label="姓名" type="text" placeholder="请输入姓名" align="right" v-model="data.name"></Field>
    <Field label="电话" type="tel" placeholder="请输入电话" align="right" v-model="data.mobile"></Field>
    <Selector title="所属机构/公司" @input="institutionChange" :placeholder="curInstitution.name">
      <SelectorOption v-for="institution in institutionList" :text="institution.name" :value="institution.id">{{institution.name}}</SelectorOption>
    </Selector>
    <Field label="街区" placeholder="请输入街区名称" align="right" v-model="curInstitution.block"></Field>
    <!--<Field label="职位" placeholder="请输入职位名称" align="right" v-model="curInstitution.position"></Field>-->
    <Field label="职位" placeholder="请输入职位名称" align="right" v-model="data.position"></Field>
  </CellGroup>

  <CellGroup class="mt10">
    <Cell title="画像" class="info--title"></Cell>
    <Selector title="关系标签" @input="relationChange" v-if="labRelaList.length > 0" :placeholder="label">
      <SelectorOption v-for="lab in labRelaList" :text="lab.name" :value="lab.id"></SelectorOption>
    </Selector>
  </CellGroup>
  <div class="edit--textarea--wrap">
    <textarea name="" id="" cols="3" rows="5" class="edit--text--area" placeholder="兴趣爱好" v-model="data.hobby"></textarea>
  </div>
  <Field label="备注" placeholder="请输入备注" align="right" v-model="data.remark"></Field>
  <div class="button--large" @click="tentacleEdit">提交</div>
</div>
