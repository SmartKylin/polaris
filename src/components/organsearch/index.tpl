<header class="organ--header">
  <div class="input--wrap">
    <img src="../../images/institution/icon_search.png" alt="">
    <input :placeholder="placeholder">
  </div>
  <router-link :to="'/organ/add?industry=' + industry">
    <img src="../../images/institution/btn_add.png" alt="" class="add--organ--icon">
  </router-link>
</header>
