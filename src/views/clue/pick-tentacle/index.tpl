<div class="pick-tentacle" ref="wrapper">
  <div>
    <Cell
      arrow
      :title="`${data.name} -- ${data.channelInstitutionName}(${data.address}) ${data.mobile}`"
      v-for="data in dataList"
      @click="picker(data)"
    >
    </Cell>
  </div>
</div>
