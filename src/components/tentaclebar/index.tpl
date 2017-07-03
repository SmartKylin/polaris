<div class="tentacle--listItem" @click="toTentacleDetail">
  <div class="tentacle--listItem--bd">
    <div class="tentacle--listItem--syn">
      <div class="flex">
        <div class="flex-1">
          <span class="syn--name">{{data.name}}</span>
        </div>
        <div class="flex-1">
          <span v-for="l in data.label" class="ml5 tag--orange">{{l}}</span>
        </div>
      </div>
      <div>
        {{data.channelInstitutionName}}
        <div class="mt5">地址：{{data.address}}</div>
      </div>
      <div class="tentacle--listItem--contract" v-if="data.recentRelationTime">
        <span>最近一次联系时间</span>
        <span>{{data.recentRelationTime}}，{{data.typeName}}</span>
      </div>
    </div>
    <a class="call-up-ctrl" :href="'tel:' + data.mobile" @click.stop></a>
  </div>
  <!--v-if: 触点详情页没有下面这些按钮-->
  <div class="tentacle--listItem--ft" v-if="!isFromDetail">
    <!--如果触不是来自公海则显示以下按钮-->
    <div v-if="!isFromSea">
      <!--<div class="tentacle&#45;&#45;listItem&#45;&#45;btn" @click="addPlan($event)">加入拜访计划</div>-->
      <a href="javascript:;" @click="addPlan('center')" class="button--small" v-if="task === 0">加入拜访计划</a>
      <div class="button--small bg-gray" v-if="task === 1">已加入拜访计划</div>
      <div class="button--small ml10" @click="addLogger($event)">写日志</div>
      <div class="button--small ml10" @click="deliverTentacle($event)" v-if="isReleased === '0'">释放触点</div>
      <div class="button--small bg-gray ml10" v-if="isReleased === '1'">已释放</div>
    </div>
    <!--如果触点来自公海则显示以下按钮-->
    <div v-if="isFromSea">
      <div v-if="data.isRelease == 1" class="tentacle--listItem--btn" @click="tentacleClaim">认领触点</div>
      <div v-if="data.isRelease == 0" class="button--small bg-gray">已被认领</div>
    </div>
  </div>
  <!--  拜访计划弹出框
  <Popup v-model="visible1">
    <div class="popup-plan popup&#45;&#45;layer">
      <Cell title="提醒时间">
        <Datepicker slot="body" placeholder="请选择提醒时间" v-model="time"></Datepicker>
      </Cell>
      <Field label="拜访标题" type="text" placeholder="拜访标题" v-model="title"></Field>
      <textarea name="" id="" cols="30" rows="5" placeholder="拜访内容" class="text&#45;&#45;area" v-model="content"></textarea>
      <div class="button&#45;&#45;large" @click="addTodo">提交</div>
    </div>
  </Popup>-->

  <Popup v-model="visible2">
    <div class="tentacleView--popup">
      <Cell title="拜访时间" arrow @click="openDatepicker" :content="date"></Cell>
      <Cell title="拜访方式" arrow>
        <Selector slot="body" @input="visitMethodChange">
          <option :value="1">面聊</option>
          <option :value="2">电聊</option>
        </Selector>
      </Cell>
      <div class="textareaBox">
        <textarea placeholder="拜访内容" v-model="content"></textarea>
      </div>
      <div class="pl20 pr20 pt25 pb25">
        <div class="button--large" @click="visitlog">提交</div>
      </div>
    </div>
  </Popup>

  <Popup v-model="visible3">
    <div class="popup-deliver tentcaleView--popup">
      <div class="textareaBox">
        <textarea placeholder="释放原因" v-model="content"></textarea>
      </div>
      <div class="pl15 pr15 pt25 pb25">
        <div class="button--large" @click="release">提交</div>
      </div>
    </div>
  </Popup>
</div>

