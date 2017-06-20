<div class="tentacle--wrap">
 <!-- <router-link :to="'/tentacle/detail/' + datakey" :replace="true" v-if="canLink">
    <div class="tentacle&#45;&#45;list">
      <div class="tentacle&#45;&#45;listItem">
        <div class="tentacle&#45;&#45;listItem&#45;&#45;main">

          <div class="tentacle&#45;&#45;listItem&#45;&#45;bd">
            <div class="tentacle&#45;&#45;listItem&#45;&#45;syn">
              <div>
                <span>{{data.name}}</span>
                <span>{{data.mobile}}</span>
                <span v-for="l in data.label" v-if="hasOwner" class="tentacle&#45;&#45;label">{{l}}</span>
              </div>
              <div>
                <span>{{data.channelInstitutionName}}（{{data.address}}）</span>
              </div>
              <div class="tentacle&#45;&#45;listItem&#45;&#45;contract" v-if="hasOwner">
                <span>最近一次联系时间</span>
                <span>{{data.recentRelationTime}}，电话/面访</span>
              </div>
            </div>
            <a class="call-up-ctrl" href="tel:18201440272" ></a>
          </div>
          <div class="tentacle&#45;&#45;listItem&#45;&#45;ft">
            <div v-if="hasOwner">
              <div class="tentacle&#45;&#45;listItem&#45;&#45;btn" @click="addPlan($event)">加入拜访计划</div>
              <div class="tentacle&#45;&#45;listItem&#45;&#45;btn" @click="addLogger($event)">写日志</div>
              <div class="tentacle&#45;&#45;listItem&#45;&#45;btn" @click="deliverTentacle($event)">释放触点</div>
            </div>
            <div class="tentacle&#45;&#45;listItem&#45;&#45;btn" v-if="!hasOwner">认领触点</div>
          </div>
          <Popup v-model="visible1">
            <div class="popup-plan popup&#45;&#45;layer">
              <Cell title="提醒时间">
                <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"></Datepicker>
              </Cell>
              <Field label="拜访标题" type="text" placeholder="拜访标题"></Field>
              &lt;!&ndash;<label for="">拜访内容</label>&ndash;&gt;
              <textarea name="" id="" cols="30" rows="3" placeholder="拜访内容" class="text&#45;&#45;area"></textarea>
              <div class="tentacle&#45;&#45;btn">提交</div>
            </div>
          </Popup>
          <Popup v-model="visible2">
            <div class="popup-logger popup&#45;&#45;layer">
              <Cell title="拜访时间">
                <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"></Datepicker>
              </Cell>
              &lt;!&ndash;<label for="">拜访内容</label>&ndash;&gt;
              <textarea name="" id="" cols="30" rows="5" placeholder="拜访内容" class="text&#45;&#45;area"></textarea>
              <div class="tentacle&#45;&#45;btn">提交</div>
            </div>
          </Popup>
          <Popup v-model="visible3">
            <div class="popup-deliver popup&#45;&#45;layer">
              <textarea name="" id="uri" cols="30" rows="5" placeholder="释放原因" class="text&#45;&#45;area"></textarea>
              <div class="tentacle&#45;&#45;btn">提交</div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  </router-link>-->
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
            <a class="call-up-ctrl" href="tel:18201440272" ></a>
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
              <Cell title="提醒时间">
                <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"></Datepicker>
              </Cell>
              <Field label="拜访标题" type="text" placeholder="拜访标题"></Field>
              <!--<label for="">拜访内容</label>-->
              <textarea name="" id="" cols="30" rows="3" placeholder="拜访内容" class="text--area"></textarea>
              <div class="tentacle--btn">提交</div>
            </div>
          </Popup>
          <Popup v-model="visible2">
            <div class="popup-logger popup--layer">
              <Cell title="拜访时间">
                <Datepicker slot="body" placeholder="请选择提醒时间" value="2017/06/14"></Datepicker>
              </Cell>
              <!--<label for="">拜访内容</label>-->
              <textarea name="" id="" cols="30" rows="5" placeholder="拜访内容" class="text--area"></textarea>
              <div class="tentacle--btn">提交</div>
            </div>
          </Popup>
          <Popup v-model="visible3">
            <div class="popup-deliver popup--layer">
              <textarea name="" id="uri" cols="30" rows="5" placeholder="释放原因" class="text--area"></textarea>
              <div class="tentacle--btn">提交</div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  </div>
</div>
