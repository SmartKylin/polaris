<div class="tentadd" v-if="labRelaList.length">
  <CellGroup class="mt15 mb10">
    <!--<Cell title="基本信息" class="info&#45;&#45;title"></Cell>-->
    <Field label="姓名" type="text" placeholder="请输入姓名" align="right" v-model="name" class="required--field"></Field>
    <Field label="电话" type="tel" placeholder="请输入电话" align="right" v-model="mobile" @blur="checkMobile" class="required--field"></Field>
    <Selector title="行业类型" v-model="industry" placeholder="请选择行业类型" @input="industryChange" class="required--field" :options="industryList">
    </Selector>
    <!--field连续才会有border-bottom，所以此处每个组件分别添加v-show-->
    <!--<Cell v-show="industry!=4" title="所属机构" :to="`/organ?industry=${industry}`">-->
    <Cell v-show="industry!=4" title="所属机构" arrow @click="linkToOrgan" class="required--field">
      <div slot="body">
        <span v-show="!organ" slot="body" class="field--placeholder">请选择所属机构</span>
        <span slot="body">{{organ}}</span>
      </div>
    </Cell>
    <Field v-show="industry!=4" label="所在分店" placeholder="请输入分店名(选填)" v-model="branchstoreName" align="right"></Field>
    <Field label="地址" placeholder="请输入地址" align="right" v-model="address" class="required--field"></Field>
    <Field v-show="industry!=4" label="职位" placeholder="请输入职位" align="right" v-model="position" class="required--field"></Field>
  </CellGroup>

  <!--<Cell title="画像" class="info&#45;&#45;title"></Cell>-->
  <CellGroup>
    <Selector title="关系标签" @input="relationChange" class="relasel--wrap required--field" placeholder="请选择关系标签" v-model="label">
      <!--<SelectorOption v-for="lab in labRelaList" :text="`${lab.name} (${lab.explain})`" :value="lab.id">-->
      <SelectorOption v-for="lab in labRelaList" :value="lab.id" :text="lab.name">
        <div>
          <p>{{lab.name}}({{lab.explain}})</p>
        </div>
      </SelectorOption>
    </Selector>
  </CellGroup>
  <CellGroup>
    <div class="add--textarea--wrap">
      <div class="textarea--title">兴趣爱好</div>
      <textarea name="" cols="3" rows="4" class="add--text--area" placeholder="(选填)" maxlength="200" v-model="hobby"></textarea>
      <div class="textarea--length">{{hobby.length}}/200</div>
    </div>
  </CellGroup>
  <CellGroup>
    <div class="add--textarea--wrap mb70">
      <div class="textarea--title">备注</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="(选填)" maxlength="100" v-model="remark"></textarea>
      <div class="textarea--length">{{remark.length}}/100</div>
    </div>
  </CellGroup>
  <div class="btn--wrap">
    <div class="btn--addtent " :class="{'active': btnSubmitActive}" @click="tentacleAdd">提交</div>
  </div>
</div>
