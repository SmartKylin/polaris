<div v-if="isAdd || model.clueCode" class="clue--edit">
  <div class="mb10 clueEdit--card" v-if="!isAdd">
    <div class="clueEdit--card--hd">
      <span class="mr10">编号：{{model.clueCode}}</span>
      <span class="tag--green">{{model.statusName}}</span>
      <span class="tag--blue">{{model.serviceStatusName}}</span>
    </div>
    <div class="flex pt20 pb20">
      <dl class="clueEdit--order--rate">
        <dd class="cont color-orange">{{model.probability}}%</dd>
        <dt class="name">成单概率</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl class="clueEdit--order--cost">
        <dd class="cont">
          应收 <span class="color-orange">{{model.serviceInfo.chargesAmount}}</span>
          实收 <span class="color-orange">{{model.serviceInfo.serviceCharge + model.serviceInfo.deposit}}</span>
        </dd>
        <dt class="name">服务费</dt>
      </dl>
    </div>
  </div>
  <CellGroup :hasBorder="false">
    <Cell
      arrow
      :to="`/clue/edit/${model.clueCode || '_'}/pick-tentacle`"
    >
      <div slot="header" class="flex-1">
        <div class="required--item">关联触点</div>
        <p v-show="model.channel.channelCode" class="clueEdit--tentacle">{{model.channel.name}} | {{model.channel.channelInstitutionName}}({{model.channel.address}}) | {{model.channel.mobile}}</p>
      </div>
    </Cell>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="借款人姓名" align="right" placeholder="输入借款人的姓名" v-model="model.users.name"></Field>
    <Field type="tel" label="联系方式" align="right" placeholder="输入借款人的联系方式" v-model="model.users.phone"></Field>
    <Field label="身份证" align="right" placeholder="输入借款人的身份证号" v-model="model.users.idCard"></Field>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field label="抵押物地址" align="right" placeholder="输入抵押物地址" v-model="model.houses.address"></Field>
    <Field type="number" label="抵押物估值(万)" align="right" placeholder="输入抵押物的估值" v-model="model.houses.assessedValue"></Field>
  </CellGroup>

  <CellGroup :hasBorder="false" class="mt10">
    <Field type="number" label="拟借款金额(万)" align="right" placeholder="输入借款金额" v-model="model.expect.amount"></Field>
    <Field type="number" label="借款周期(月)" align="right" placeholder="输入借款周期" v-model="model.expect.term"></Field>
  </CellGroup>

  <CellGroup>
    <div class="add--textarea--wrap">
      <div class="textarea--title">备注</div>
      <textarea name="" id="" cols="3" rows="4" class="add--text--area" placeholder="(选填)" maxlength="100" v-model="model.about"></textarea>
      <div class="textarea--length">{{model.about.length}}/100</div>
    </div>
  </CellGroup>

  <p class="section-title">成单概率能帮助你更好的管理时间</p>
  <CellGroup :hasBorder="false">
    <Field align="right" placeholder="请输入成单概率" v-model="model.probability" :value="model.probability" class="required--field">
      <span slot="label">
        <!--<span class="start&#45;&#45;flag">*</span>-->
        <span>成单概率(%)</span>
      </span>
    </Field>
  </CellGroup>

  <!-- <p class="clueAdd--notice">意向融资方案（非必填）</p>
  <LoanSchemeView /> -->

  <div class="mt30 pl20 pr20 pb30">
    <div class="btn--large--gray" :class="{'button--large': submitBtnActive}" @click="save">{{isAdd ? '生成线索' : '保存修改'}}</div>
  </div>

  <router-view></router-view>
</div>
