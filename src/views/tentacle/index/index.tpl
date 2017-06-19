<div>
  <SearchBox/>
  <div class="tentacleView--tab mt10">
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">121</p>
      <p class="tentacleView--tabItem--name">触点总量</p>
    </div>
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">42</p>
      <p class="tentacleView--tabItem--name">激活触点</p>
    </div>
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">27</p>
      <p class="tentacleView--tabItem--name">有签约记录</p>
    </div>
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">8</p>
      <p class="tentacleView--tabItem--name">有成单记录</p>
    </div>
  </div>
  <div class="index--overview">
    <div class="index--wrap success">
      <router-link to="/tentacle/list">
        <div>12</div>
        <div class="index--label">"1-A-高"触点</div>
        <div class="index--reply">进行逼单，扩大战果</div>
      </router-link>
    </div>
    <div class="index--wrap blue">
      <router-link to="/tentacle/list">
        <div >12</div>
        <div class="index--label">"B-高"触点</div>
        <div class="index--reply">定期回访，升级关系</div>
      </router-link>
    </div>
    <div class="index--wrap warning">
      <router-link to="/tentacle/list">
        <div>12</div>
        <div class="index--label">"C-高"触点</div>
        <div class="index--reply">价值驱动，定点激活</div>
      </router-link>
    </div>
    <div class="index--wrap danger">
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
