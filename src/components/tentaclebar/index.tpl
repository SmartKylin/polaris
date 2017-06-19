<div class="tentacle--wrap">
  <router-link to="/tentacle/detail">
    <div class="tentacle--list">
      <div class="tentacle--listItem">
        <div class="tentacle--listItem--main">

          <div class="tentacle--listItem--bd">
            <div class="tentacle--listItem--syn">
              <div>
                <span>李四</span>
                <span>18203789024</span>
                <span class="tentacle--label" v-if="hasOwner">一级</span>
                <span class="tentacle--label" v-if="hasOwner">A类</span>
                <span class="tentacle--label" v-if="hasOwner">高产</span>
              </div>
              <div>
                <span>链家地产（四惠东店）</span>
              </div>
              <div class="tentacle--listItem--contract" v-if="hasOwner">
                <span>最近一次联系时间</span>
                <span>2017年6月14，电话/面访</span>
              </div>
            </div>
            <a class="mobile" href="tel:18692120886"></a>
          </div>
          <div class="tentacle--listItem--ft">
            <div v-if="hasOwner">
              <div class="tentacle--listItem--btn" @click="addPlan($event)">加入拜访计划</div>
              <div class="tentacle--listItem--btn" @click="addLogger($event)">写日志</div>
              <div class="tentacle--listItem--btn" @click="deliverTentacle($event)">释放触点</div>
            </div>
            <div class="tentacle--listItem--btn" v-if="!hasOwner">认领触点</div>
          </div>
          <Popup v-model="visible1">
            <div class="popup-plan popup--layer">
              <div>提醒时间</div>
              <Field label="拜访标题" type="text" placeholder="拜访标题"></Field>
              <textarea name="" id="" cols="30" rows="10">拜访情况</textarea>
            </div>
          </Popup>
          <Popup v-model="visible2">
            <div class="popup-logger popup--layer">
              <div>拜访时间</div>
              <Datepicker slot="body" placeholder="请选择预约日期" v-model="date"/>
              <textarea name="" id="" cols="30" rows="10">拜访情况</textarea>
            </div>
          </Popup>
          <Popup v-model="visible3">
            <div class="popup-deliver popup--layer">
              <textarea name="" id="uri" cols="30" rows="10">释放原因</textarea>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  </router-link>
</div>
