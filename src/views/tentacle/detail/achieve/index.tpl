<div>
  <div class="achieve--history ">
    <div class="achieve--title">历史业绩</div>

    <div class="tentacleDetail--tab mt10">
      <div class="tentacleDetail--tabItem">
        <p class="tentacleDetail--tabItem--cont">{{data.deliveryNum}}</p>
        <p class="tentacleDetail--tabItem--name">历史订单</p>
      </div>
      <div class="tentacleDetail--tabItem">
        <p class="tentacleDetail--tabItem--cont">{{data.endorseNum}}</p>
        <p class="tentacleDetail--tabItem--name">历史签约</p>
      </div>
      <div class="tentacleDetail--tabItem">
        <p class="tentacleDetail--tabItem--cont">{{data.endorseSuccProbability}}</p>
        <p class="tentacleDetail--tabItem--name">签约成功率</p>
      </div>
      <div class="tentacleDetail--tabItem">
        <p class="tentacleDetail--tabItem--cont">{{data.bargainNum}}</p>
        <p class="tentacleDetail--tabItem--name">历史成单</p>
      </div>
      <div class="tentacleDetail--tabItem">
        <p class="tentacleDetail--tabItem--cont">{{data.loanSuccProbability}}</p>
        <p class="tentacleDetail--tabItem--name">放款成功率</p>
      </div>
    </div>
  <!--  <div class="tentacleDetail&#45;&#45;tab mt10">
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">652W额</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">成单总金</p>
      </div>
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">217W</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">件均金额</p>
      </div>
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">12绩</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">平均成单成</p>
      </div>
    </div>-->
  </div>
  <div class="achieve--exchange ">
    <div class="achieve--title">最近交易</div>
    <div class="exchange--bd">
      <div>
        <span>最近一次递单时间:</span>
        <span>{{data.recentDeliveryClueTime}}</span>
        <router-link :to="'/clue/' + data.recentDeliveryClueId">查询线索详情</router-link>
      </div>
      <div>
        <span>最近一次成单时间:</span>
        <span>{{data.recentBargainClueTime}}</span>
        <router-link :to="'/clue/' + data.recentBargainClueId">查询线索详情</router-link>
      </div>
    </div>
  </div>
 <!-- <div class="achieve&#45;&#45;status">
    <div class=" achieve&#45;&#45;title">当前状态</div>
    <div class="tentacleDetail&#45;&#45;tab mt10">
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">在途线索</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">9</p>
      </div>
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">正常还款</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">2</p>
      </div>
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">逾期线索</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">1</p>
      </div>
      <div class="tentacleDetail&#45;&#45;tabItem">
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;cont">还清线索</p>
        <p class="tentacleDetail&#45;&#45;tabItem&#45;&#45;name">0</p>
      </div>
    </div>
  </div>-->
</div>
