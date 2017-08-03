<div class="organ">
  <Search placeholder="输入机构名称进行查找" :industry="industry"></Search>
  <div class="search--result" v-show="institutionList.length">
    <div class="organ--item flex" v-for="i in institutionList" @click="handleSelect(i)">
      <div>链家地产</div>
      <img v-show="institution !== i" src="../../../images/institution/btn_nor.png" alt="">
      <img v-show="institution === i" src="../../../images/institution/btn_sel.png" alt="">
    </div>
  </div>
  <div class="no--search--result" v-show="!institutionList.length">
    <img src="../../../images/institution/background_search_wu.png" alt="" class="organ--body--bg">
    <div class="organ--txt">暂无搜索结果</div>
    <div class="organ--txt">您可点击右上角“+”创建</div>
  </div>
</div>
