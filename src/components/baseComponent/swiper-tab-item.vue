<template>
    <div class="bg-swiper-tab-item" @click="slectItem" :style="{width:itemWidth}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'bgTabItem',
        props: {
            disabled: {
                default: false,
                type: Boolean,
                required: false
            },
            activeColor: {
                default: 'red',
                type: String,
                required: false
            },
            defaultColor: {
                default: '#555',
                type: String,
                required: false
            },
            leftWidth: {
                type: null,
                required: false
            },
            selectIndex: {
                type: null,
                required: false
            },
            itemWidth: {
                type: null,
                required: false
            }
        },
        data() {
            return {
                selectId: "",
            }
        },
        methods: {
            slectItem() {
                this.$nextTick(() => {

                    let siblings = this.$parent.$children
                    this.selectId = this.$el.getAttribute('selected');
                    //   this.$parent.$el.lastChild.style.left = this.selectId / siblings.length *100 +'%';
                    //   console.log( this.$parent.$children[siblings.length -1].$el.nextSibling.nextSibling)
                    //   this.$parent.$el.lastChild.style.width = this.$el.offsetWidth + 'px';
                   
                    let borderNode = this.$parent.$el.firstChild.firstChild.lastChild;

                    borderNode.style.left = this.$el.offsetLeft + 'px';
                    let pageWidth = this.$parent.$el.clientWidth;
                    
                    this.$parent.$el.firstChild.firstChild.scrollLeft = this.$el.offsetLeft - pageWidth/2 + this.$el.offsetWidth/2;
                    borderNode.style.width = this.$el.offsetWidth + 'px';
                    this.$emit("selectItem", this.selectId)
                })

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    
</style>