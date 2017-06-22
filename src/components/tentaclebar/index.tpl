<div class="tentacle--listItem" @click="toTentacleDetail">
  <div class="tentacle--listItem--bd">
    <div class="tentacle--listItem--syn">
      <div>
        <span>{{data.name}}</span>
        <span>{{data.mobile}}</span>
        <span v-for="l in data.label" v-if="hasOwner" class="tentacle--label">{{l}}</span>
      </div>
      <div>
        <span>{{data.channelInstitutionName}}（{{data.address}}）</span>
      </div>
      <div class="tentacle--listItem--contract" v-if="hasOwner">
        <span>最近一次联系时间</span>
        <span>{{data.recentRelationTime}}，电话/面访</span>
      </div>
    </div>
    <a class="call-up-ctrl" :href="'tel:' + data.mobile" @click.stop></a>
  </div>
  <!--v-if: 如果不是详情页则没有下面这些按钮-->
  <div class="tentacle--listItem--ft" v-if="canLink">
    <!--如果触已点被认领则显示以下按钮-->
    <div v-if="hasOwner">
      <!--<div class="tentacle&#45;&#45;listItem&#45;&#45;btn" @click="addPlan($event)">加入拜访计划</div>-->
      <a href="javascript:;" @click="addPlan('center')" class="button--small">加入拜访计划</a>
      <div class="tentacle--listItem--btn" @click="addLogger($event)">写日志</div>
      <div class="tentacle--listItem--btn" @click="deliverTentacle($event)">释放触点</div>
    </div>
    <!--如果触点未被认领则显示以下按钮-->
    <div v-if="isFromSea">
      <div v-if="!hasOwner && !data.claimTime" class="tentacle--listItem--btn" @click="tentacleClaim">认领触点</div>
      <div v-if="data.claimTime" class="button--small bg-gray">已被认领</div>
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
    <div class="popup-logger popup--layer">
      <Cell title="拜访时间">
        <Datepicker slot="body" placeholder="请选择提醒时间" v-model="time"></Datepicker>
      </Cell>
      <textarea name="" id="" cols="30" rows="5" placeholder="拜访内容" class="text--area" v-model="content"></textarea>
      <div class="button--large" @click="visitlog">提交</div>
    </div>
  </Popup>
  <Popup v-model="visible3">
    <div class="popup-deliver popup--layer">
          <textarea name="" id="uri" cols="30" rows="5" placeholder="释放原因" class="text--area"
                    v-model="content"></textarea>
      <div class="button--large mt20" @click="release">提交</div>
    </div>
  </Popup>
</div>

