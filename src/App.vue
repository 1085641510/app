<template>
  <div id="app">
    <bg-header :leftIcon='leftIcon' :rightIcon='rightIcon'></bg-header>
    <router-view/>
  </div>
</template>

<script>
  import bgHeader from './components/header'

  export default {
    name: 'App',
    components: {
      bgHeader
    },
    data() {
      return {
        leftIcon:`<i class="fa fa-chevron-left"></i>`,
        rightIcon:`<i class="fa fa-repeat"></i>`
      }
    }
  }

</script>

<style>

</style>