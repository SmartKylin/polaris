<div class="Loadmore" v-show="visible">
  <slot>
    <Spinner size="18"/>
    <span>{{ desc }}</span>
  </slot>
</div>

