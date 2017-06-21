<div>
  <CellGroup>
    <Cell title="基本信息" class="info--title"></Cell>
    <Field label="姓名" type="text" placeholder="请输入姓名" align="right"></Field>
    <Field label="电话" type="tel" placeholder="请输入电话" align="right"></Field>
    <Field label="职位" placeholder="请输入职位名称" align="right"></Field>
    <Cell title="所属机构/公司" arrow>
      <Selector slot="body" v-model="city">
        <option :value="item.val" v-for="item in options">{{item.text}}</option>
      </Selector>
    </Cell>
  </CellGroup>
  <CellGroup class="mt10">
    <Cell title="画像" class="info--title"></Cell>
    <Cell title="关系标签" arrow>
      <Selector slot="body" v-model="city">
        <option :value="item.val" v-for="item in options">{{item.text}}</option>
      </Selector>
    </Cell>
    <Cell title="产能标签" arrow>
      <Selector slot="body" v-model="city">
        <option :value="item.val" v-for="item in options">{{item.text}}</option>
      </Selector>
    </Cell>
  </CellGroup>
  <div class="pd10">
    <textarea name="" id="" cols="3" rows="10" class="text--area" placeholder="兴趣爱好"></textarea>
  </div>
  <Field label="备注" placeholder="请输入备注" align="right"></Field>
  <div class="button--large">提交</div>
</div>
