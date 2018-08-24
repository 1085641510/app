<template>
  <div class="bg-tab-item" @click="slectItem">
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
      }
    },
    data() {
      return {
        selectId:"",
      }
    },
    methods: {
      slectItem() {
        this.$nextTick(()=>{
          let siblings = this.$parent.$children
          this.selectId = this.$el.getAttribute('selected');
          this.$parent.$el.lastChild.style.left = this.selectId / siblings.length *100 +'%'
          
          this.$emit("selectItem",this.selectId)
        })
        
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .bg-tab-item {
    width: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
  }
</style>