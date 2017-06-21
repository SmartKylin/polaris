<style lang="stylus">
  .item--wrap {
    background #ffff;
    padding 20px;
  }
  .log--left {
    height 50px;
    line-height 50px;
    .boll {
      display inline-block;
      width 10px;
      height 10px;
      border-radius: 50%;
      background gray;
    }
  }
  .log--right--remark {
    font-size 12px;
    color gray;
  }
</style>

<template>
  <div class="flex item--wrap">
    <div class="log--left">
      <span>{{log.visitTime.toLocaleDateString()}}</span>
      <span class="boll"></span>
      <span>{{log.visitTime.toLocaleTimeString()}}</span>
    </div>
    <div class="log--right ml20">
      <div>{{log.staffName || log.oper}},第{{log.id}}次拜访</div>
      <div class="log--right--remark mt10">备注：{{log.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      log: {
        type: Object
      }
    }
  }
</script>
