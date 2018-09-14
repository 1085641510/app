<template>
  <div class="bg-scroller" :style="styles">
    <div class="xs-container" >
      <slot></slot>
      <slot name="pulldown"></slot>
      <slot name="pullup"></slot>
    </div>
  </div>
</template>

<script>
import XScroll from 'xscroll/build/cmd/xscroll.js'
import Pulldown from 'xscroll/build/cmd/plugins/pulldown'
import Pullup from 'xscroll/build/cmd/plugins/pullup'

export default {
  name: 'bgScroller',
   props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        }
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: true
    },
    preventTouchMove: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    stickyElements: String,
    fixedElements: String,
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    pullupConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      styles: {}
    }
  },
  watch:{
    height () {
      this.getStyles()
    },
  },
  methods:{
    consoleMes(){
      console.log(23131)
    },
    reset (scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing)
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing)
        }
      }
      this._xscroll && this._xscroll.resetSize()
    },
    getStyles () {
      let height = this.height
      if (!this.height && (this.$el && !this.$el.style.height) && this.lockX) {
        height = `${document.documentElement.clientHeight}px`
        this.reset()
      }
      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`
      }
      this.styles = {
        height: `${height}`
      }
    }
  },
  mounted(){
    this.uuid =  Math.random().toString(36).substring(3, 8);
    this.$nextTick(()=>{
      this.$el.setAttribute('id', `bg-scroller-${this.uuid}`);
     
      let content = null
      if (this.$slots.default) {
        content = this.$slots.default[0].elm
      }
      if (!content) {
        throw new Error('no content is found')
      }

      this._xscroll = new XScroll({
         renderTo: `#bg-scroller-${this.uuid}`,
          lockX: this.lockX,
          lockY: this.lockY,
          scrollbarX: this.scrollbarX,
          scrollbarY: this.scrollbarY,
          content: content,
          bounce: this.bounce,
          useOriginScroll: this.useOriginScroll,
          useTransition: this.useTransition,
          preventDefault: this.preventDefault,
          preventTouchMove: this.preventTouchMove,
          boundryCheck: this.boundryCheck,
          gpuAcceleration: this.gpuAcceleration,
          stopPropagation: this.stopPropagation,
          stickyElements: this.stickyElements
          // fixedElements: `#bg-scroller-${this.uuid}`
      })

      // this._xscroll.on('scroll', () => {
      //   if (this._xscroll) {
      //     const top = this._xscroll.getScrollTop()
      //     this.$emit('on-scroll', {
      //       top: top,
      //       left: this._xscroll.getScrollLeft()
      //     })
      //     const containerHeight = this._xscroll.containerHeight
      //     const scrollHeight = this._xscroll.height
      //     if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
      //       this.$emit('on-scroll-bottom')
      //     }
      //   }
      // })

      // if (this.usePulldown) {
      //   // if use slot=pulldown
      //   let container = this.$slots.pulldown
      //   let config = objectAssign(pulldownDefaultConfig(), this.pulldownConfig)
      //   if (container) {
      //     config.container = container[0].elm
      //   }
      //   this.pulldown = new Pulldown(config)
      //   this._xscroll.plug(this.pulldown)
      //   this.pulldown.on('loading', (e) => {
      //     this.$emit('on-pulldown-loading', this.uuid)
      //   })
      //   this.pulldown.on('statuschange', (val) => {
      //     this.currentValue.pulldownStatus = val.newVal
      //   })
      // }

      // if (this.usePullup) {
      //   // if use slot=pullup
      //   let container = this.$slots.pullup
      //   let config = objectAssign(pullupDefaultConfig(), this.pullupConfig)
      //   if (container) {
      //     config.container = container[0].elm
      //   }
      //   this.pullup = new Pullup(config)
      //   this._xscroll.plug(this.pullup)
      //   this.pullup.on('loading', (e) => {
      //     this.$emit('on-pullup-loading', this.uuid)
      //   })
      //   this.pullup.on('statuschange', (val) => {
      //     this.currentValue.pullupStatus = val.newVal
      //   })
      // }

      

      this._xscroll.render();
    })

    this.getStyles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
