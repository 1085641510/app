<template>
  <div class="index_style">
    <collapse-left-transition>
      <div class="index_nav" v-show="showNavListFlag">
        <!--background-color="#675a5a" default-color="#ffffff" active-color="red" active-bg-color="#ae8d37c7"-->
        <bg-nav  :list='navList' @open="openChild" @close="closeChild" @select="selectNavMenu" :unique-opened="true" :default-selectid.sync="navDefaultId"></bg-nav>
      </div>
    </collapse-left-transition>

    <div class="index_contain">
      <div class="index_contain_shade" v-show="showNavListFlag" @click="controlNavList"></div>
      <bg-header background-color="#222222" default-color="#ffffff">
        <div slot="left" @click="controlNavList">
          <i class="fa fa-list" aria-hidden="true"></i>
        </div>
        <div slot="title">
          myApp
        </div>
        <div slot="right">
          <i class="fa fa-repeat"></i>
        </div>
      </bg-header>
      <router-link to="/showGroup">Go to showGroup</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'showIndex',
  data() {
    return {
      navList: [
        {
          id: "1", label: '项目1', icon: `<i class="fa fa-steam"></i>`, children: [
            {
              id: "1-1", label: '子项目1',
              children: [
                { id: "1-1-1", label: '子项目1-1' },
                { id: "1-2-1", label: '子项目2-1' }
              ]
            },
            { id: "1-2", label: '子项目2' }
          ]
        },
        { id: "2", label: '项目2' },
        { id: "3", label: '项目3' }
      ],
      navDefaultId: "1-2-1",
      showNavListFlag: false
    }
  },
  methods: {
    selectNavMenu(item, path) {
      console.log(`select item`)
      console.log(item, path)
    },
    openChild(item, path) {
      console.log(`openChild`)
      console.log(item, path)
    },
    closeChild(item, path) {
      console.log(`closeChild`)
      console.log(item, path)
    },
    controlNavList() {
      this.showNavListFlag = !this.showNavListFlag;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index_style {
  width: 100%;
  height: 100%;
  display: flex;
}

.index_nav {
  flex-grow: 0;
  flex-shrink: 0;
  width: 70%;
  height: 100%;
}

.index_contain {
  flex: 0 0 100%;
  height: 100%;
  position: relative;
}

.index_contain_shade {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: .6;
  background-color: #cccccc;
}
</style>
