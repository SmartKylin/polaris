<div>
  <section v-show="!isIdentifying">
    <header class="bg-white">
      <div class="selector--title">请选择录入方式</div>
    </header>
    <main>
      <section class="flex bg-white sel--main--item" @click="scanCardHandle">
        <img class="sel--main--img" src="../../../images/card-scannig.svg" alt="">
        <div>扫描名片</div>
      </section>
      <router-link to="/tentacle/edit">
        <section class="flex bg-white mt10 sel--main--item">
          <img class="sel--main--img" src="../../../images/entering.svg" alt="">
          <div>手动录入</div>
        </section>
      </router-link>
    </main>
  </section>
  
  <section v-show="isIdentifying">
    <header class="select--header">
      <div v-show="!identiFailed" class="header--identifying">
        请稍等，正在识别中...
      </div>
      <div v-show="!identiFailed" class="progress--box">{{progress}}%</div>
      <div v-show="identiFailed" class="header--failed">
        <p class="failed--tip">无法识别名片信息</p>
        <p class="method--tip">请尝试重新拍摄或手动录入</p>
      </div>
    </header>
    <section class="main--img">
      <img :src="isAndroid? localId :localData" alt="photo">
    </section>
    <Footer v-show="identiFailed" class="footer--failed mt10">
      <div class="button--small" @click="scanCardHandle">重新拍摄</div>
      <router-link to="/tentacle/edit">
        <div class="button--small">手动录入</div>
      </router-link>
    </Footer>
  </section>
</div>
