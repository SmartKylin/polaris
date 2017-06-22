<div class="clueView">
  <div class="clueView--hd">
    <div class="clueView--top">
      <div class="clueView--search">
        <input
          v-model="keywords"
          class="clueView--search--ipt"
          type="text"
          placeholder="输入姓名等关键词搜索线索..."
          @focus="isFocus = true"
          @blur="isFocus = false"
        >
      </div>
      <a v-show="!isFocus" class="clueView--add" href="#/clue/edit/_"></a>
      <div v-show="isFocus" class="clueView--search--btn" @click="search">搜索</div>
    </div>

  <!--   <div class="clueView--data">
      <p class="clueView--data--amount">652万</p>
      <p class="clueView--data--desc">在途总金额</p>
    </div>
    <div class="clueView--links">
      <div>新建线索</div>
      <i class="clueView--links--line"></i>
      <div>更多线索</div>
    </div>
   -->

    <Tab @change="queryWithStatus">
      <div class="tab--item" :data-key="data.id" v-for="(data, k) in categories" :class="{active: data.id == status}">
        <p class="clueView--tabItem--cont">{{data.val}}</p>
        <p class="clueView--tabItem--name">{{data.name}}</p>
      </div>
    </Tab>
  </div>


    <!-- <div class="clueView--list--sort">
      <Tab @change="sortBy">
        <div class="tab--item clueView--list--sortBtn active" data-key="效率">概率有限</div>
        <div class="tab--item clueView--list--sortBtn" data-key="金额">金额优先</div>
      </Tab>
      <span class="clueView--list--amount">查询总金额：250万</span>
    </div> -->

  <ListView class="clueView--list">
    <div class="clueView--listItem" v-for="data in dataList" :data-listview-to="'/clue/'+ data.clueCode">
      <div class="clueView--listItem--main">

        <div class="clueView--listItem--hd">
          <span class="clueView--listItem--code">{{data.clueCode}}</span>
          <div class="clear-gap">
            <span class="tag--orange mr5" v-if="data.statusName">{{data.statusName}}</span>
            <span class="tag--orange" v-if="data.serviceStatusName">{{data.serviceStatusName}}</span>
          </div>
        </div>

        <div class="clueView--listItem--bd">
          <div class="clueView--listItem--rate">{{data.probability}}%</div>
          <div class="clueView--listItem--syn">
            <div>
              <span>{{data.userName}}</span>
              <span>{{data.expectAmount | formatMoney}}万</span>
              <span>{{data.expectTerm}}个月</span>
            </div>
<!--             <div>
              <span>招商银行</span>
              <span>金领贷</span>
            </div>
 -->            <div>{{data.extMessage}}</div>
          </div>
          <a class="call-up-ctrl" :href="'tel:' + data.userPhone" @click.stop></a>
        </div>

        <div class="clueView--listItem--ft">
          <a class="button--small mr10" :href="'#/clue/close/' + data.clueCode" @click.stop>关闭线索</a>
          <a class="button--small" :href="'#/clue/edit/' + data.clueCode" @click.stop>预约面签</a>
        </div>
      </div>
    </div>
  </ListView>

  <Loadmore @reachBottom="loadmore" :visible="!allLoaded"></Loadmore>
</div>
