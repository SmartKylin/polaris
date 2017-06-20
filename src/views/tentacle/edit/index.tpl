<div>
  <Field label="姓名" type="text" placeholder="请输入姓名"></Field>
  <Field label="电话" type="tel" placeholder="请输入电话"></Field>
  <Field label="微信号" type="weixin" placeholder="请输入微信号"></Field>
  <Cell title="所属机构/公司" arrow>
    <Selector slot="body" v-model="city">
      <option :value="item.val" v-for="item in options">{{item.text}}</option>
    </Selector>
  </Cell>
  <Field label="职位" placeholder="请输入职位名称"></Field>
  <Field label="备注" placeholder="请输入备注"></Field>
  <div class="tentacle--btn">保存</div>
</div>
