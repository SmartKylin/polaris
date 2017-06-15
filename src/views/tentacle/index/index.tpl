<div>
  <SearchBox/>
  <div class="index--count">
    <div class="index--total count--inner">
      <div class="index--num">121</div>
      <div>触点总量</div>
    </div>
    <div class="index--active count--inner">
      <div class="index--num">42</div>
      <div>激活触点</div>
    </div>
    <div class="index--contract count--inner">
      <div class="index--num">27</div>
      有签约记录
    </div>
    <div class="index--order count--inner">
      <div class="index--num">8</div>
      <div>有成单记录</div>
    </div>
  </div>
  <div class="index--overview">
    <div class="index--wrap">
      <router-link to="/tentacle/list">
        <div>12</div>
        <div class="index--label">1-A-高</div>
        <div class="index--reply">进行逼单，扩大战果</div>
      </router-link>
    </div>
    <div class="index--wrap">
      <router-link to="/tentacle/list">
        <div >12</div>
        <div class="index--label">"1-B-高"</div>
        <div class="index--reply">定期回访，升级关系</div>
      </router-link>
    </div>
    <div class="index--wrap">
      <router-link to="/tentacle/list">
        <div>12</div>
        <div class="index--label">"1-c-高"</div>
        <div class="index--reply">价值驱动，定点激活</div>
      </router-link>
    </div>
    <div class="index--wrap">
      <router-link to="/tentacle/list">
        <div class="index--reply">12</div>
        <div class="index--label">VIP->5级、2级以上长期休眠</div>
        <div>危机公关，快速反应</div>
      </router-link>
    </div>
  </div>
  <CellGroup style="margin-top: 15px" class="index--cellgroup">
    <Cell title="一级触点" arrow class="index--cell" to="/tentacle/search/:1">
      <span slot="body">12</span>
    </Cell>
    <Cell title="二级触点" arrow class="index--cell" to="/tentacle/search/:2">
      <span slot="body">12</span>
    </Cell>
    <Cell title="三级触点" arrow class="index--cell" to="/tentacle/search/:3">
      <span slot="body">12</span>
    </Cell>
    <Cell title="四级触点" arrow class="index--cell" to="/tentacle/search/:4">
      <span slot="body">12</span>
    </Cell>
    <Cell title="五级触点" arrow class="index--cell" to="/tentacle/search/:5">
      <span slot="body">12</span>
    </Cell>
    <Cell title="VIP触点" arrow class="index--cell" to="/tentacle/search/:6">
      <span slot="body">12</span>
    </Cell>
  </CellGroup>
</div>
