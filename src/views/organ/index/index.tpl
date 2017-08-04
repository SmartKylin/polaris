<div class="organ">
  <header class="organ--header">
    <div class="input--wrap">
      <img src="../../../images/institution/icon_search.png" alt="">
      <input placeholder="输入机构名称进行查找"  v-model="keyword">
    </div>
    <router-link :to="'/organ/add?industry=' + industry">
      <img src="../../../images/institution/btn_add.png" alt="" class="add--organ--icon">
    </router-link>
  </header>
  <div class="search--result" v-show="institutionList.length && keyword">
    <div class="organ--item flex" v-for="i in institutionList" @click="handleSelect(i)">
      <div>{{i.name}}</div>
      <img v-show="institution !== i" src="../../../images/institution/btn_nor.png" alt="">
      <img v-show="institution === i" src="../../../images/institution/btn_sel.png" alt="">
    </div>
  </div>
  <div class="no--search--result" v-show="!institutionList.length && keyword">
    <img src="../../../images/institution/background_search_wu.png" alt="" class="organ--body--bg">
    <div class="organ--txt">暂无搜索结果</div>
    <div class="organ--txt">您可点击右上角“+”创建</div>
  </div>
</div>
