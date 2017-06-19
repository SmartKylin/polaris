<div>
  <div class="clueView--top">
    <div class="clueView--search">
      <input class="clueView--search--ipt" type="text" placeholder="输入姓名等关键词搜索线索...">
    </div>
    <div class="clueView--add"></div>
  </div>

  <div class="clueView--data">
    <p class="clueView--data--amount">652万</p>
    <p class="clueView--data--desc">在途总金额</p>
  </div>
  <div class="clueView--links">
    <div>新建线索</div>
    <i class="clueView--links--line"></i>
    <div>更多线索</div>
  </div>

  <div class="clueView--tab mt10">
    <div class="clueView--tabItem">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">在途线索</p>
    </div>
    <div class="clueView--tabItem active">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待签约</p>
    </div>
    <div class="clueView--tabItem">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待审批</p>
    </div>
    <div class="clueView--tabItem">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待放款</p>
    </div>
    <div class="clueView--tabItem">
      <p class="clueView--tabItem--cont">123</p>
      <p class="clueView--tabItem--name">待结单</p>
    </div>
  </div>
  <div class="clueView--list--sort">
    <div>
      <span class="clueView--list--sortBtn">概率有限</span>
      <span class="clueView--list--sortBtn">金额优先</span>
    </div>
    <span class="clueView--list--amount">查询总金额：250万</span>
  </div>

  <div class="clueView--list">
    <router-link to="/clue/123">
    <div class="clueView--listItem" v-for="i in [1,2,2,3]">
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
            <div>
              已停留 3 天
            </div>
          </div>
          <a class="call-up-ctrl" href="tel:18692120886"></a>
        </div>

        <div class="clueView--listItem--ft">
          <div class="button--small mr10">关闭线索</div>
          <div class="button--small mr10">转单</div>
          <div class="button--small">生成咨询订单</div>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</div>
