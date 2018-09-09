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
        curselectIndex:1
      }
    },
    methods: {
      alertTap() {
        alert(`this is tap`);
        console.log(111)
      },
      
      selectTabItem(index){
        //console.log(index)
      }
    }
  }

</script>

<style lang="scss" scoped>
$baseFontSize:75px;
    @function torem($px) {
        @return $px / $baseFontSize * 1rem;
    }
  
  .mytab{
    font-size: torem(30px);
    height: torem(100px);
  }
  .swiper-tab{
    font-size: torem(30px);
    height: torem(100px);
  }
</style>