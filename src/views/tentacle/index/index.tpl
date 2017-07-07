<div>
  <SearchBox/>
  <div class="tentacleView--tab" v-if="data.total">
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">{{data.total.channel}}</p>
      <p class="tentacleView--tabItem--name">触点总量</p>
    </div>
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">{{data.total.delivery_clue}}</p>
      <p class="tentacleView--tabItem--name">有递单记录</p>
    </div>
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">{{data.total.endorse_clue}}</p>
      <p class="tentacleView--tabItem--name">有签约记录</p>
    </div>
    <div class="tentacleView--tabItem">
      <p class="tentacleView--tabItem--cont">{{data.total.bargain_clue}}</p>
      <p class="tentacleView--tabItem--name">有成单记录</p>
    </div>

  </div>
  <div class="index--overview" v-if="data.synthesize">
   <!-- <div class="index&#45;&#45;wrap">
    <router-link to="/tentacle/list?level=1&category=a&capacity=5">
      <div class="index&#45;&#45;count">{{data.synthesize.ag1}}</div>
      <div class="index&#45;&#45;label">"1-A-高"触点</div>
      <div class="index&#45;&#45;reply">进行逼单，扩大战果</div>
    </router-link>
  </div>
    <div class="index&#45;&#45;wrap">
      <router-link to="/tentacle/list?category=b&capacity=5">
        <div class="index&#45;&#45;count">{{data.synthesize.bg}}</div>
        <div class="index&#45;&#45;label">"B-高"触点</div>
        <div class="index&#45;&#45;reply">定期回访，升级关系</div>
      </router-link>
    </div>
    <div class="index&#45;&#45;wrap">
      <router-link to="/tentacle/list?category=c&capacity=5">
        <div class="index&#45;&#45;count">{{data.synthesize.cg}}</div>
        <div class="index&#45;&#45;label">"C-高"触点</div>
        <div class="index&#45;&#45;reply">价值驱动，定点激活</div>
      </router-link>
    </div>
    <div class="index&#45;&#45;wrap">
      <router-link to="/tentacle/list?isDormant=true">
        <div class="index&#45;&#45;count">{{data.synthesize.dormant}}</div>
        <div class="index&#45;&#45;label">VIP->5级、2级以上长期休眠</div>
        <div class="index&#45;&#45;reply">危机公关，快速反应</div>
      </router-link>
    </div>-->
    <div class="index--wrap">
      <router-link to="/tentacle/list?level=1&category=a">
        <div class="index--count">{{data.synthesize.ag1}}</div>
        <div class="index--label">"1-A"触点</div>
        <div class="index--reply">进行逼单，扩大战果</div>
      </router-link>
    </div>
    <div class="index--wrap">
      <router-link to="/tentacle/list?category=b">
        <div class="index--count">{{data.synthesize.bg}}</div>
        <div class="index--label">"B"触点</div>
        <div class="index--reply">定期回访，升级关系</div>
      </router-link>
    </div>
    <div class="index--wrap">
      <router-link to="/tentacle/list?category=c">
        <div class="index--count">{{data.synthesize.cg}}</div>
        <div class="index--label">"C"触点</div>
        <div class="index--reply">价值驱动，定点激活</div>
      </router-link>
    </div>
    <div class="index--wrap">
      <router-link to="/tentacle/list?isDormant=true">
        <div class="index--count">{{data.synthesize.dormant}}</div>
        <div class="index--label">VIP->5级、2级以上长期休眠</div>
        <div class="index--reply">危机公关，快速反应</div>
      </router-link>
    </div>
  </div>

  <CellGroup class="index--cellgroup" v-if="data.level">
    <Cell title="一级触点" arrow class="index--cell" to="/tentacle/search/1" :content="data.level.one">
    </Cell>
    <Cell title="二级触点" arrow class="index--cell" to="/tentacle/search/2" :content="data.level.two">
    </Cell>
    <Cell title="三级触点" arrow class="index--cell" to="/tentacle/search/3" :content="data.level.three">
    </Cell>
    <Cell title="四级触点" arrow class="index--cell" to="/tentacle/search/4" :content="data.level.four">
    </Cell>
    <Cell title="五级触点" arrow class="index--cell" to="/tentacle/search/5" :content="data.level.five">
    </Cell>
    <Cell title="VIP触点" arrow class="index--cell" to="/tentacle/search/6" :content="data.level.vip">
     </Cell>
  </CellGroup>
</div>
