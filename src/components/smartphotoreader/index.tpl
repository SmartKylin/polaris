<div>
  <header>
    <div v-show="scanning && !scanFailed">
      请稍等，正在识别中...
    </div>
    <div v-show="scanFailed" class="header--failed">
      <p class="failed--tip">无法识别名片信息</p>
      <p class="method--tip">请尝试重新拍摄或手动录入</p>
    </div>
  </header>
  <main>
    <img src="../../images/logo.png" alt="photo">
  </main>
  <Footer v-show="scanFailed" class="footer--failed">
    <button class="button--small">重新拍摄</button>
    <router-link to="/tentacle/edit">
        <button class="button--small">手动录入</button>
    </router-link>
  </Footer>
</div>
