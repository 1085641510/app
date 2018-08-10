<template>
  <div class="header">
        王鹏强的博客
        <span class="he">2131231</span>
  </div>
</template>

<script>
export default {
  name: 'bgHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        position: fixed;
        width: 100%;
        background: #222222;
        color: #fff;
        font-size: 18px;
        height: 50px;
    }
</style>
