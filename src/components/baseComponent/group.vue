<template>
  <div class="bg-group-cells">
    <div class="bg-group-title" :style="{color:titleColor}" v-if="title" v-html="title"></div>
    <slot name="title"></slot>
    <div class="bg-group-content">
      <slot></slot>
    </div>
    <div class="bg-group-footer" :style="{color:footerTitleColor}" v-if="footerTitle" v-html="footerTitle"></div>
    <slot name="footerTitle"></slot>
  </div>
</template>

<script>
  export default {
    name: 'bgGroup',
    props: {
      title: String,
      titleColor: String,
      labelColor: String,
      labelWidth: String,
      labelAlign: String,
      footerTitle: String,
      footerTitleColor: String,
      labelMarginRight: String
    },
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>