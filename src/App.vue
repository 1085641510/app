<template>
  <div id="app">
    <div class="leftNav">
      <bg-nav :list='navList'></bg-nav>
    </div>
    <bg-header>
      <div slot="left">
        <i class="fa fa-chevron-left" v-tap="alertTap"></i>
      </div>
      <div slot="right">
        <i class="fa fa-repeat"></i>
      </div>
    </bg-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navList: [
        {
          key: 1, label: '项目1', icon: `<i class="fa fa-chevron-left"></i>`, children: [
            {
              key: "1-1", label: '子项目1',
              children: [
                { key: "1-1-1", label: '子项目1-1' },
                { key: "1-2-1", label: '子项目2-1' }
              ]
            },
            { key: "1-2", label: '子项目2' }
          ]
        },
        { key: 2, label: '项目2' },
        { key: 3, label: '项目3' }
      ]
    }
  },
  methods: {
    alertTap() {
      alert(`this is tap`);
      console.log(111)
    }

  }
}

</script>

<style>
.leftNav {
  position: fixed;
  left: 0;
  top: 0;
  width: 400px;
  height: 100%;
  overflow: auto;
}
</style>