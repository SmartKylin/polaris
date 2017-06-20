<div>
  <CellGroup :hasBorder="false">
    <Cell
      title="关联触点"
      arrow
      to="/clue/add/pick-tentacle"
    >
      <p v-show="tentacle.code" class="clueAdd--tentacle" slot="body">{{tentacle.name}} | {{tentacle.channelInstitutionName}}({{tentacle.address}}) | {{tentacle.mobile}}</p>
    </Cell>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="借款人姓名" align="right" placeholder="输入借款人的姓名" v-model="users.name"></Field>
    <Field label="联系方式" align="right" placeholder="输入借款人的联系方式" v-model="users.phone"></Field>
    <Field label="身份证" align="right" placeholder="输入借款人的身份证号" v-model="users.idCard"></Field>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="抵押物地址" align="right" placeholder="输入抵押物地址" v-model="houses.address"></Field>
    <Field label="抵押物估值(万)" align="right" placeholder="输入抵押物的估值" v-model="houses.assessedValue"></Field>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="拟借款金额(万)" align="right" placeholder="输入借款金额" v-model="expect.amount"></Field>
    <Field label="借款周期(月)" align="right" placeholder="输入借款周期" v-model="expect.term"></Field>
  </CellGroup>

  <p class="clueAdd--notice">成单概率能帮助你更好的管理时间</p>
  <CellGroup :hasBorder="false">
    <Field label="成单概率(%)" align="right" placeholder="请输入成单概率" v-model="probability"></Field>
  </CellGroup>

  <div class="mt30 pl20 pr20">
    <div class="button--large" @click="save">提交</div>
  </div>

  <router-view></router-view>
</div>
