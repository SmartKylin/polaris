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
  <div class="search--result" >
    <div v-show="!keyword">
      <div class="hot---institution" v-if="hotInstitutionList && hotInstitutionList.length">
        <p class="hot--title">常用机构</p>
        <div class="organ--item flex" v-for="i in hotInstitutionList" @click="handleSelect(i)">
          <div>{{i.name}}</div>
          <img v-show="institution !== i" src="../../../images/institution/btn_nor.png" alt="">
          <img v-show="institution === i" src="../../../images/institution/btn_sel.png" alt="">
        </div>
      </div>
      <div class="allins--list" v-if="institutionList && institutionList.length">
        <p class="hot--title">所有机构</p>
        <div v-for="ins in institutionList">
           <div class="institution--letter">{{ins.letter}}</div>
           <div class="organ--item flex" v-for="i in ins.list" @click="handleSelect(i)">
             <div>{{i.name}}</div>
             <img v-show="institution !== i" src="../../../images/institution/btn_nor.png" alt="">
             <img v-show="institution === i" src="../../../images/institution/btn_sel.png" alt="">
           </div>
         </div>
      </div>
      
    </div>
    <div v-show="keyword" class="organ--item flex" v-for="i in institutionList" @click="handleSelect(i)">
      <div>{{i.name}}</div>
      <img v-show="institution !== i" src="../../../images/institution/btn_nor.png" alt="">
      <img v-show="institution === i" src="../../../images/institution/btn_sel.png" alt="">
    </div>
  </div>
  <div class="no--search--result" v-show="industry === 2 && hotInstitutionList.length == 0 && !institutionList">
    <img src="../../../images/institution/background_search_wu.png" alt="" class="organ--body--bg">
    <div class="organ--txt">暂无机构数据</div>
    <div class="organ--txt">您可点击右上角“+”创建</div>
  </div>
  <!-- '暂无结果'背景显示的条件是：1.机构列表为空  2.输入框有值 2.输入框的值已经固定-->
  <div class="no--search--result" v-show="institutionList && institutionList.length == 0 && keyword && !isSearching">
    <img src="../../../images/institution/background_search_wu.png" alt="" class="organ--body--bg">
    <div class="organ--txt">暂无搜索结果</div>
    <div class="organ--txt">您可点击右上角“+”创建</div>
  </div>
</div>
