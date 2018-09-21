<template>
    <div>
        <bg-header>
            <div slot="left">
                <i class="fa fa-chevron-left" @click="goBack"></i>
            </div>
            <div slot="title">
                tab 展示
            </div>
            <div slot="right">
                <i class="fa fa-repeat"></i>
            </div>
        </bg-header>

        <input v-model="value" type="text" />
        <bg-tab class="mytab" :select-index="curselectIndex">
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
        </bg-swiper-tab>
    </div>
</template>

<script>
    export default {
        name: 'showTab',
        data() {
            return {
                curselectIndex: 1,
                value: "gagagag"
            }
        },
        beforeRouteLeave(to, from, next) {
            
            next();

        },
        activated() {


        },
        mounted() {

        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            selectTabItem(index) {
                //console.log(index)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>