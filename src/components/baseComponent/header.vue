<template>
  <div :class='headerClass'>
        <div class="left-icon">
            <slot name="left"></slot>
        </div>
        <div class="title" :class="titleClass">{{title}}</div>
        <div class="right-icon">
            <slot name="right"></slot>
        </div>
  </div>
</template>

<script>
export default {
  name: 'bgHeader',
  props:{
      title:{
          default: 'my blog',
          type: null,
          required: false
      },
      titleClass:{
          default: 'font-title',
          type: null,
          required: false
      },
      headerClass:{
          default: 'header',
          type: String,
          required: false
      }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $baseFontSize :75px;

    @function torem($px){
        @return $px / $baseFontSize * 1rem; 
    }

    .header{
        width: 100%;
        background: #222222;
        color: #fff;
        font-size: torem(28px);
        height: torem(40px);
        display: flex;
        align-items: center;
        padding: 0 torem(20px);;
    }
    .font-title{
        color: #fff;
        font-size: torem(28px);
    }
    .title{
        flex: 1;
        text-align: center;
    }
    .left-icon,.right-icon{
        width: torem(20px);
        height: torem(20px);
        font-size: torem(20px);
    }
</style>
