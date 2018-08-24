<template>
  <div class="bg-group-cells">
    <div class="bg-group-title" v-if="title" v-html="title"></div>
    <slot name="title"></slot>
    <div class="bg-group-content">
        <slot></slot>
    </div>
    <div class="bg-group-footer" v-if="footerTitle" v-html="footerTitle"></div>
    <slot name="footerTitle"></slot>
  </div>
</template>

<script>
export default {
  name: 'bgGroup',
  props:{
    title: String,
    titleColor: String,
    labelColor: String,
    labelWidth: String,
    labelAlign: String,
    footerTitle: String,
    footerTitleColor: String,
    labelMarginRight: String
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .bg-group-cells{
        position: relative;
        overflow: auto;
    }
    .bg-group-cells:before{
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #D9D9D9;
        color: #D9D9D9;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    .bg-group-cells:after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #D9D9D9;
        color: #D9D9D9;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    
</style>
