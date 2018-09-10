<template>
    <div class="bg-swiper-tab" bg-tab>
        <div class="bg-swiper-contain">
            <div class="bg-swiper-tab-con" ref="bgSwiperTab" :style="{'font-weight': lineWidth}">
                <div @touchstart="readIntPageX" @touchmove="swiper" class="bg-swiper-slot">
                    <slot></slot>
                </div>
                <div class="bg-swiper-tab-link-border" :style="{left:leftWidth,width:firstBorderWidth}"></div>
            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: 'bgTab',
        props: {
            lineWidth: {
                default: 100,
                type: Number,
                required: false
            },
            selectIndex: {
                default: 0,
                type: null,
                required: false
            }
        },
        data() {
            return {
                leftWidth: 0,
                curselectIndex: this.selectIndex,
                children: [],
                firstBorderWidth: '100px',
                pageX: 0
            }
        },
        methods: {
            swiper(e) {
                let moveX = e.changedTouches[0].pageX;
                
                this.$refs.bgSwiperTab.scrollLeft = this.$refs.bgSwiperTab.scrollLeft - (moveX - this.pageX)/5;

            },
            readIntPageX(e) {
                //console.log(`pagex----${this.pageX}`)
                this.pageX = e.changedTouches[0].pageX;
            }
        },
        watch: {

        },
        mounted() {
            this.$nextTick(() => {

                this.children = this.$children;
                this.firstBorderWidth = this.children[this.selectIndex].$el.offsetWidth + 'px';

                for (let ind = 0; ind < this.children.length; ind++) {
                    this.children[ind].$el.setAttribute('selected', ind);

                    if (this.children[ind].$el.getAttribute('selected') == this.curselectIndex) {

                        this.curselectIndex = ind;

                        this.leftWidth = this.children[ind].$el.offsetLeft + 'px';

                    }
                }

            })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>