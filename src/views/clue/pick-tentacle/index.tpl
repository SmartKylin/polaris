<div class="pick-tentacle" ref="wrapper">
  <div class="pick-tentacle--hd">
    <div class="searchBarWrapper">
      <div class="searchBar">
        <input
          v-model="keywords"
          class="searchBar--ipt"
          type="text"
          placeholder="输入姓名等关键词搜索触点..."
        >
      </div>
      <div class="searchBar--btn" @click="search">搜索</div>
    </div>
  </div>

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
