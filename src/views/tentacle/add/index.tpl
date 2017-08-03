<div class="tentadd">
  <CellGroup class="mt15 mb10">
    <!--<Cell title="基本信息" class="info&#45;&#45;title"></Cell>-->
    <Field label="*姓名" type="text" placeholder="请输入姓名" align="right" v-model="name"></Field>
    <Field label="*电话" type="tel" placeholder="请输入电话" align="right" v-model="mobile" @blur="checkMobile"></Field>
  
    <!--<Cell>
      <div class="Field&#45;&#45;label" slot="header">*电话</div>
      <div class="Field&#45;&#45;bd" slot="body">
        <div class="Field&#45;&#45;input">
          <input type="tel" style="text-align: right" v-model="value" placeholder="请输入电话"  @blur="checkMobile">
        </div>
        <div class="Field&#45;&#45;delBox" v-show="mobile.length" @click="clear">
          <div class="Field&#45;&#45;del"></div>
        </div>
      </div>
    </Cell>-->
    
    <Selector title="*行业类型" @input="industryChange" v-model="industry" :placeholder="industryList[industry]">
      <SelectorOption v-for="(val, key) in industryList" :text="val" :value="key"></SelectorOption>
    </Selector>
    <!--field连续才会有border-bottom，所以此处每个组件分别添加v-show-->
    <Cell v-show="industry!=4" title="*所属机构" arrow :content="organ" @click="handlePush"></Cell>
    <Field v-show="industry!=4" label="所在分店" placeholder="请输入分店名称" v-model="branchstoreName" align="right"></Field>
    <Field v-show="industry!=4" label="*职位" placeholder="请输入职位" align="right" v-model="position"></Field>
    <Field label="*地址" placeholder="请输入地址" align="right" v-model="address"></Field>
  </CellGroup>

  <!--<Cell title="画像" class="info&#45;&#45;title"></Cell>-->
  <Selector title="*关系标签" @input="relationChange" :placeholder="labelObj.name">
    <SelectorOption v-for="lab in labRelaList" :text="`${lab.name} (${lab.explain})`" :value="lab.id"></SelectorOption>
  </Selector>
  <div class="add--textarea--wrap">
    <div class="textarea--title">兴趣爱好</div>
    <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="200个字以内(选填)" maxlength="200" v-model="hobby"></textarea>
    <div class="textarea--length">{{hobby.length}}/200</div>
  </div>
  <div class="add--textarea--wrap">
    <div class="textarea--title">备注</div>
    <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="100个字以内(选填)" maxlength="100" v-model="remark"></textarea>
    <div class="textarea--length">{{remark.length}}/100</div>
  </div>
  <div class="btn--addtent " :class="{'active': btnSubmitActive}" @click="tentacleAdd">提交</div>
</div>
