<template>
  <div id="app">
    <bg-header></bg-header>
    <router-view/>
  </div>
</template>

<script>
  import bgHeader from './components/header'

  export default {
    name: 'App',
    components: {
      bgHeader
    }
  }

</script>

<style>

</style>