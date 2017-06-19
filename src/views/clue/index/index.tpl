<div>
  <div class="clueView--top">
    <a class="clueView--search" href="#/clue/search">
      <input class="clueView--search--ipt" type="text" placeholder="输入姓名等关键词搜索线索...">
    </a>
    <a class="clueView--add" href="#/clue/add"></a>
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
    <div class="tab--item" data-key="0">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">全部</p>
    </div>
    <div class="tab--item active" data-key="1">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待预约</p>
    </div>
    <div class="tab--item" data-key="2">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待签约</p>
    </div>
    <div class="tab--item" data-key="3">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待放款</p>
    </div>
    <div class="tab--item" data-key="4">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待结单</p>
    </div>
  </Tab>

  <div class="clueView--list--sort">
    <Tab @change="sortBy">
      <div class="tab--item clueView--list--sortBtn active" data-key="效率">概率有限</div>
      <div class="tab--item clueView--list--sortBtn" data-key="金额">金额优先</div>
    </Tab>
    <span class="clueView--list--amount">查询总金额：250万</span>
  </div>

  <ListView class="clueView--list mt10">
    <div class="clueView--listItem" v-for="i in [1,2,3,4]" :data-listview-to="'/clue/'+ i">
      <div class="clueView--listItem--main">

        <div class="clueView--listItem--hd">
          <span class="clueView--listItem--code">ZFL201706191633</span>
          <div class="clear-gap">
            <span class="tag--orange mr5">待签约</span>
            <span class="tag--orange">未收款</span>
          </div>
        </div>

        <div class="clueView--listItem--bd">
          <div class="clueView--listItem--rate">86%</div>
          <div class="clueView--listItem--syn">
            <div>
              <span>张三</span>
              <span>125万</span>
              <span>3个月</span>
            </div>
            <div>
              <span>招商银行</span>
              <span>金领贷</span>
            </div>
            <div>已停留 3 天</div>
          </div>
          <a class="call-up-ctrl" href="tel:18692120886" @click.stop></a>
        </div>

        <div class="clueView--listItem--ft">
          <a class="button--small mr10" href="#/clue/close/123" @click.stop>关闭线索</a>
          <a class="button--small" href="#/clue/edit/123" @click.stop>预约面签</a>
        </div>
      </div>
    </div>
  </ListView>
</div>
