<template>
  <div id="app">
    <!--<div class="leftNav">
      <bg-nav :list='navList' @open="openChild" @close="closeChild" @select="selectNavMenu" :unique-opened="true" :default-selectid.sync="navDefaultId"></bg-nav>
    </div>-->

    <!--<bg-header>
      <div slot="left">
        <i class="fa fa-chevron-left" @click="alertTap"></i>
      </div>
      <div slot="right">
        <i class="fa fa-repeat"></i>
      </div>
    </bg-header>-->

    <!--<bg-tab class="mytab" :select-index="curselectIndex">
        <bg-tab-item @selectItem="selectTabItem">tab1</bg-tab-item>
        <bg-tab-item @selectItem="selectTabItem">tab2</bg-tab-item>
        <bg-tab-item @selectItem="selectTabItem">tab3</bg-tab-item>
        <bg-tab-item @selectItem="selectTabItem">tab4</bg-tab-item>
        <bg-tab-item @selectItem="selectTabItem">tab5</bg-tab-item>
    </bg-tab>
    <div style="height: 20px;background: yellow"></div>
    <bg-swiper-tab class="swiper-tab" :select-index="curselectIndex">
        <bg-swiper-tab-item :item-width="'200px'" @selectItem="selectTabItem">tab1</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'300px'" @selectItem="selectTabItem">tab2</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'200px'" @selectItem="selectTabItem">tab3</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'200px'" @selectItem="selectTabItem">tab4</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'200px'" @selectItem="selectTabItem">tab5</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'200px'" @selectItem="selectTabItem">tab6</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'200px'" @selectItem="selectTabItem">tab7</bg-swiper-tab-item>
        <bg-swiper-tab-item :item-width="'300px'" @selectItem="selectTabItem">tab8</bg-swiper-tab-item>
    </bg-swiper-tab>-->
    <transition :name="transitionName" >
      <!--<keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router-view"></router-view>
      </keep-alive>-->
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'bg-slide-forward',
        map:{}
      }
    },
    watch: {
      '$route'(to, from) {
       
        if (!this.map[to.name]) {
          this.map[to.name] = +new Date() + 1;
        }
        if (!this.map[from.name]) {
          this.map[from.name] = +new Date();
        }

        if (this.map[to.name] > this.map[from.name]) {
          this.transitionName = 'bg-slide-forward';
        } else {
          this.transitionName = 'bg-slide-back'
        }
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss">
  /*公共样式*/
  
  @import './assets/css/reset';
 
  
  
</style>
<style lang="scss" scoped>
  $baseFontSize:75px;
    @function torem($px) {
      @return $px / $baseFontSize * 1rem;
    }
  .mytab {
    font-size: torem(30px);
    height: torem(100px);
  }
  .router-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>