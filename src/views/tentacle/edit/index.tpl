<div>
  <CellGroup>
    <Cell title="基本信息" class="info--title"></Cell>
    <Field label="姓名" type="text" placeholder="请输入姓名" align="right" v-model="data.name"></Field>
    <Field label="电话" type="tel" placeholder="请输入电话" align="right" v-model="data.mobile"></Field>
    <Cell title="所属机构/公司" arrow>
      <Selector slot="body" @input="institutionChange" v-if="institutionList.length>0">
        <option v-for="institution in institutionList" :value="institution.id">{{institution.name}}</option>
      </Selector>
    </Cell>
    <Field label="职位" placeholder="请输入职位名称" align="right" v-model="data.position"></Field>
  </CellGroup>

  <CellGroup class="mt10">
    <Cell title="画像" class="info--title"></Cell>
    <Cell title="关系标签" arrow @click="">
      <Selector slot="body" @input="relationChange" v-if="labRelaList.length > 0">
        <option :value="item.id" v-for="item in labRelaList">{{item.name}}</option>
      </Selector>
    </Cell>
    <Cell title="产能标签" arrow>
      <Selector slot="body" @input="capacityChange" v-if="labCapaList.length > 0">
        <option :value="item.id" v-for="item in labCapaList">{{item.name}}</option>
      </Selector>
    </Cell>
  </CellGroup>
  <div class="pd10">
    <textarea name="" id="" cols="3" rows="10" class="text--area" placeholder="兴趣爱好" v-model="data.hobby"></textarea>
  </div>
  <Field label="备注" placeholder="请输入备注" align="right" v-model="data.remark"></Field>
  <div class="button--large" @click="tentacleEdit">提交</div>

</div>
