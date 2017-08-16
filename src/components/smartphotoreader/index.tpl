<div>
  <header>
    <div v-show="scanning && !scanFailed">
      请稍等，正在识别中...
    </div>
    <div v-show="scanFailed">
      <p>无法识别名片信息</p>
      <p>请尝试重新拍摄或手动录入</p>
    </div>
  </header>
  <main>
    <img src="" alt="photo">
  </main>
  <Footer v-show="scanFailed">
    <button>重新拍摄</button>
    <router-link to="/tentacle/edit">
        <button>手动录入</button>
    </router-link>
  </Footer>
</div>
