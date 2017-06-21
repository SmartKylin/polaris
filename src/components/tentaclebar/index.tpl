<div class="tentacle--wrap">
  <div @click="pushto">
    <div class="tentacle--list">
      <div class="tentacle--listItem">
        <div class="tentacle--listItem--main">

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
            <div v-if="hasOwner">
              <div class="tentacle--listItem--btn" @click="addPlan($event)">加入拜访计划</div>
              <div class="tentacle--listItem--btn" @click="addLogger($event)">写日志</div>
              <div class="tentacle--listItem--btn" @click="deliverTentacle($event)">释放触点</div>
            </div>
            <div class="tentacle--listItem--btn" v-if="!hasOwner">认领触点</div>
          </div>
          <Popup v-model="visible1">
            <div class="popup-plan popup--layer">
              <Cell title="提醒时间">
                <Datepicker slot="body" placeholder="请选择提醒时间" v-model="time"></Datepicker>
              </Cell>
              <Field label="拜访标题" type="text" placeholder="拜访标题" v-model="title"></Field>
              <textarea name="" id="" cols="30" rows="5" placeholder="拜访内容" class="text--area" v-model="content"></textarea>
              <div class="button--large" @click="addTodo">提交</div>
            </div>
          </Popup>
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
              <textarea name="" id="uri" cols="30" rows="5" placeholder="释放原因" class="text--area"></textarea>
              <div class="button--large mt20">提交</div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  </div>
</div>
