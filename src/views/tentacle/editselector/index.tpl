<div>
  <header class="bg-white">
    <div class="selector--title">请选择录入方式</div>
  </header>
  <main>
    <section class="flex bg-white sel--main--item">
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
  <SmartPhotoReader/>
</div>
