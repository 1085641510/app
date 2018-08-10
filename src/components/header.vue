<template>
  <div :class='headerClass'>
        <div :class="leftIconClass" v-html="leftIcon"></div>
        <div class="title" :class="titleClass">{{title}}</div>
        <div :class="rightIconClass" v-html="rightIcon"></div>
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
      leftIcon:{
          default: '',
          type: null,
          required: false
      },
      rightIcon:{
          default: '',
          type: null,
          required: false
      },
      leftIconClass:{
          default: 'left-icon',
          type: String,
          required: false
      },
      rightIconClass:{
          default: 'right-icon',
          type: String,
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
        position: fixed;
        width: 100%;
        background: #222222;
        color: #fff;
        font-size: torem(28px);
        height: torem(80px);
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
        width: torem(50px);
        height: torem(50px);
        font-size: torem(50px);
    }
</style>
