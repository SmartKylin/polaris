<div>
  <div class="loanScheme">
    <Cell arrow v-for="data in dataList" @click="edit(data)">
      <div class="loanScheme--item" slot="body">
        <div class="loanScheme--item--main">{{data.bank}} - {{data.name}} | {{data.type | nameOfType}}</div>
        <div class="loanScheme--item--remark">备注：{{data.about}}</div>
      </div>
    </Cell>
    <div class="pt15 pb15">
      <div class="loanScheme--addBtn" @click="openLoanSchemeEditor">添加</div>
    </div>
  </div>

  <Popup v-model="visible">
    <div class="loanSchemeEditor">
      <Field label="产品名称" placeholder="请输入方案名称" align="right" v-model="model.name"></Field>
      <Field label="银行/平台" placeholder="请输入银行或平台名称" align="right" v-model="model.bank"></Field>
      <Radio class="mt10" v-model="model.type">
        <RadioOption value="0">抵押贷</RadioOption>
        <RadioOption value="1">信用贷</RadioOption>
      </Radio>
      <div class="loanSchemeEditor--textarea">
        <textarea placeholder="备注" v-model="model.about"></textarea>
      </div>
      <div class="pl20 pr20 pt25 pb25">
        <div class="button--large" @click="save">保存</div>
      </div>
    </div>
  </Popup>
</div>
