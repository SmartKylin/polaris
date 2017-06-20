<div>
  <CellGroup :hasBorder="false">
    <Cell title="关联触点" content="" arrow></Cell>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="借款人姓名" align="right" placeholder="输入借款人的姓名"></Field>
    <Field label="联系方式" align="right" placeholder="输入借款人的联系方式"></Field>
    <Field label="身份证" align="right" placeholder="输入借款人的身份证号"></Field>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="抵押物地址" align="right" placeholder="输入抵押物地址"></Field>
    <Field label="抵押物估值(万)" align="right" placeholder="输入抵押物的估值"></Field>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="拟借款金额(万)" align="right" placeholder="输入借款金额"></Field>
    <Field label="借款周期(月)" align="right" placeholder="输入借款周期"></Field>
  </CellGroup>

  <p class="clueAdd--notice">成单概率能帮助你更好的管理时间</p>
  <CellGroup :hasBorder="false">
    <Field label="成单概率(%)" align="right" placeholder="请输入成单概率"></Field>
  </CellGroup>

  <div class="mt30 pl20 pr20">
    <div class="button--large">提交</div>
  </div>
</div>
