<style scoped="">

</style>
<template>
  <div>
    <div>{{name}}|{{tel}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      tel: {
        type: String,
        required: true
      },
      label: {
        type: Array,
        required: true
      },
      organ: {
        type: String,
        required: true
      },
      lastConcat: {
        type: String,
        required: true
      },
      lastOrder: {
        type: String
      }
    }
  }
</script>
