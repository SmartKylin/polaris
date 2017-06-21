<div class="clueDetailWrapper" v-if="inited">
  <div class="clueDetail--order">
    <div class="clueDetail--order--hd">
      <span class="clueDetail--order--code">{{model.clueCode}}</span>
      <div class="flex vertical-center">
        <span class="color-green">{{model.statusName}}</span>
        <i class="dividing-line ml10 mr10"></i>
        <span class="color-blue">{{model.serviceStatusName}}</span>
      </div>
    </div>
    <div class="clueDetail--order--bd">
      <dl class="clueDetail--order--rate">
        <dd class="cont color-orange">{{model.probability}}%</dd>
        <dt class="name">成单概率</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl class="clueDetail--order--cost">
        <dd class="cont">
          应收 <span class="color-orange">{{model.serviceInfo.chargesAmount}}</span>
          实收 <span class="color-orange">{{model.serviceInfo.serviceCharge + model.serviceInfo.deposit}}</span>
        </dd>
        <dt class="name">服务费</dt>
      </dl>
    </div>
    <!-- <div class="clueDetail--order--ft">
      <div class="button--small">修改成功概率</div>
    </div> -->
  </div>

  <div class="clueDetail--card mt10">
    <div class="clueDetail--card--hd">
      <span>借款人信息</span>
    </div>
    <div class="clueDetail--card--bd">
      <dl>
        <dd>{{model.expect.amount | formatMoney}}万</dd>
        <dt>借款需求</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl>
        <dd>{{model.expect.term}}个月</dd>
        <dt>期限</dt>
      </dl>
      <!-- <i class="dividing-line"></i>
      <dl>
        <dd>8% - 12%</dd>
        <dt>综合息费</dt>
      </dl> -->
    </div>
    <div class="clueDetail--card--ft">
      <div class="clueDetail--username">{{model.users.name}}</div>
      <a class="clueDetail--userphone" :href="'tel:' + model.users.phone">{{model.users.phone}}</a>
    </div>
  </div>

  <div class="clueDetail--card mt10">
    <div class="clueDetail--card--hd">
      <span>触点信息</span>
    </div>
    <div class="clueDetail--card--bd">
      <dl>
        <dd>{{model.channel.name}}</dd>
        <dt>联系人</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl>
        <dd>{{model.channel.channelInstitutionName}}</dd>
        <dt>公司</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl>
        <dd>{{model.channel.mobile}}</dd>
        <dt>联系电话</dt>
      </dl>
    </div>
  </div>

  <div class="clueDetail--card mt10" v-if="model.loanInfos">
    <div class="clueDetail--card--hd">
      <span>贷款方案</span>
    </div>
    <div class="clueDetail--card--bd">
      <dl>
        <dd>{{model.loanInfos.loanAmount | formatMoney}}万</dd>
        <dt>金额</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl>
        <dd>{{model.loanInfos.loanTerm}}个月</dd>
        <dt>期限</dt>
      </dl>
      <i class="dividing-line"></i>
      <dl>
        <dd>{{model.loanInfos.loanRate}}%</dd>
        <dt>利率</dt>
      </dl>
    </div>
    <div class="clueDetail--card--ft">
      <div>{{model.loanInfos.bank}} - {{model.loanInfos.name}}</div>
      <div>{{model.loanInfos.loanStatusName}}</div>
    </div>
  </div>

  <div class="clueDetail--card mt10" v-if="model.backlog">
    <div class="clueDetail--card--hd">
      <span>待办事项</span>
    </div>
    <div class="todos pl15 pr15" v-for="todo in model.backlog">
      <div class="todos--title">{{todo.title}}</div>
      <div class="flex pt10 pb10 vertical-center">
        <div class="todos--time flex-1">{{todo.planTime}}</div>
        <div class="clear-gap">
          <!-- <div class="button--small bg-red mr10">未完成</div> -->
          <a v-if="todo.isAccomplish === 0" class="button--small bg-green" :href="'#/todo/close/' + todo.id">完成</a>
          <div v-if="todo.isAccomplish === 1" class="button--small bg-gray">已完成</div>
          <div v-if="todo.isAccomplish === 2" class="button--small bg-gray">已关闭</div>
        </div>
      </div>
      <!-- <div class="todos--cont">
        线索：张三 18692120886 待面聊
      </div> -->
    </div>
  </div>

<!--   <div class="clueDetail--card mt10">
    <div class="clueDetail--card--hd">
      <span>备注</span>
    </div>
    <div class="pl15 pr15 pt10 pb10">
      <div class="clueDetail--remark">
      发送到发生的发生法撒旦法水电费水电费是的发送到发生的发生法撒旦法水电费水电费是的
      </div>
    </div>
  </div>
 -->
  <div class="clueDetail--operation">
    <a class="clueDetail--operation-btn" :href="'#/clue/close/' + model.clueCode">关闭</a>
    <a class="clueDetail--operation-btn" :href="'#/clue/edit/' + model.clueCode">编辑</a>
    <div class="clueDetail--operation-btn" @click="openInterviewPanel">预约面签</div>
  </div>

  <Popup v-model="interviewVisible">
    <div class="clueDetail--interview">
      <Cell title="待办内容" content="预约面签"></Cell>
      <Cell title="预约日期" arrow>
        <Datepicker slot="body" placeholder="请选择预约日期" v-model="interview.date"/>
      </Cell>
      <div class="pt30 pl15 pr15">
        <div class="button--large" @click="save">提交</div>
      </div>
    </div>
  </Popup>
</div>
