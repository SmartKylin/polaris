<div>
  <CellGroup>
    <Cell title="基本信息" class="info--title"></Cell>
    <Field label="姓名" type="text" placeholder="请输入姓名" align="right" v-model="name"></Field>
    <Field label="电话" type="tel" placeholder="请输入电话" align="right" v-model="mobile"></Field>
  <!--  <Cell title="所属机构/公司" arrow>
      <Selector slot="body" @input="institutionChange" v-if="institutionList.length>0">
        <option v-for="institution in institutionList" :value="institution.id">{{institution.name}}</option>
      </Selector>
    </Cell>-->
    <Selector title="所属机构/公司" @input="institutionChange" v-if="institutionList.length" :placeholder="curInstitution.name">
      <SelectorOption v-for="institution in institutionList" :text="institution.name" :value="institution.id"></SelectorOption>
    </Selector>
    <Field label="街区" placeholder="请输入街区名称" align="right" v-model="curInstitution.block"></Field>
    <Field label="职位" placeholder="请输入职位名称" align="right" v-model="position"></Field>
  </CellGroup>

  <CellGroup class="mt10">
    <Cell title="画像" class="info--title"></Cell>
    <!--<Cell title="关系标签" arrow @click="">
      <Selector slot="body" @input="relationChange" v-if="labRelaList.length > 0">
        <option :value="item.id" v-for="item in labRelaList">{{item.name}}</option>
      </Selector>
    </Cell>-->
    <Selector title="关系标签" @input="relationChange" v-model="label" placeholder="请选择">
      <SelectorOption v-for="lab in labRelaList" :text="`${lab.name} (${lab.explain})`" :value="lab.id"></SelectorOption>
    </Selector>
   <!-- <Cell title="产能标签" arrow>
      <Selector slot="body" @input="capacityChange" v-if="labCapaList.length > 0">
        <option :value="item.id" v-for="item in labCapaList">{{item.name}}</option>
      </Selector>
    </Cell>-->
  </CellGroup>
  <div class="add--textarea--wrap">
    <textarea name="" id="" cols="3" rows="5" class="add--text--area" placeholder="兴趣爱好" v-model="hobby"></textarea>
  </div>
  <Field label="备注" placeholder="请输入备注" align="right" v-model="remark"></Field>
  <div class="button--large" @click="tentacleAdd">提交</div>

 <!-- &lt;!&ndash;选择机构弹出框&ndash;&gt;
  <Popup v-model="visible" position="top">
    <div class="popup&#45;&#45;layer">
      <Cell title="城市" arrow v-if="visible">
        <Selector slot="body" v-model="city" @input="cityChange">
          <option v-for="city in cityList" :value="city.id">{{city.name}}</option>
        </Selector>
      </Cell>
      <Cell title="区域" arrow v-if="areaSelectorVisible" @input="areaChange">
        <Selector slot="body">
          <option v-for="area in areaList" :value="area.id">{{area.name}}</option>
        </Selector>
      </Cell>
      &lt;!&ndash;<Cell title="机构" arrow v-show="institutionSelectorVisible">
        <Selector slot="body" v-model="institution" @input="institutionChange">
          <option v-for="institution in institutionList" :value="institution.id">{{institution.name}}</option>
        </Selector>&ndash;&gt;
      </Cell>
    </div>
  </Popup>-->
</div>
