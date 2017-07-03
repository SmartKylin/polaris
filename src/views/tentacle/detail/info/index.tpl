<div class="detail--info" v-if="data.address">
  <CellGroup class="mt10">
    <div class="info--item--title">机构信息</div>
    <!--<Cell title="机构信息" class="info&#45;&#45;title"></Cell>-->
    <Cell title="关联机构" :content="data.channelInstitutionName"></Cell>
    <Cell title="所属行业" :content="industryNames[data.industry]"></Cell>
    <Cell title="职位" :content="data.position"></Cell>
  </CellGroup>
  <CellGroup class="mt10">
    <div class="info--item--title">联系方式</div>
    <!--<Cell title="联系方式" class="info&#45;&#45;title"></Cell>-->
    <Cell title="联系电话" :content="data.mobile"></Cell>
    <!--<Cell title="电子邮箱" content="192@qq.com"></Cell>-->
    <Cell title="联系地址" :content="data.address"></Cell>
  </CellGroup>

  <div class="button--large" @click="toEditTentacle">编辑</div>
</div>
