<template>
  <div class="bg-tab">
    <div class="bg-tab-con" ref="bgTab" :style="{'font-weight': lineWidth}" :select-index="selectIndex">
      <slot></slot>
    </div>
    <div class="bg-tab-link-border" :style="{left:leftWidth+'%',width:100/children.length+'%'}"></div>
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
        children: []
      }
    },
    watch: {

    },
    mounted() {
      this.$nextTick(() => {
        this.children = this.$children;

        for (let ind = 0; ind < this.children.length; ind++) {
          this.children[ind].$el.setAttribute('selected', ind);

          if (this.children[ind].$el.getAttribute('selected') == this.curselectIndex) {

            this.curselectIndex = ind;
            this.leftWidth = ind / this.children.length * 100
           
          }
        }
       
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>