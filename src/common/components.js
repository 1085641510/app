import bgHeader from '@/components/baseComponent/header'
import bgNav from '@/components/baseComponent/navMenu'
import autoTransition from '@/components/baseComponent/autoTransition'
import autoLeftTransition from '@/components/baseComponent/autoLeftTransition'
import tab from '@/components/baseComponent/tab'
import tabItem from '@/components/baseComponent/tab-item'
import swiperTab from '@/components/baseComponent/swiper-tab'
import swiperTabItem from '@/components/baseComponent/swiper-tab-item'
import group from '@/components/baseComponent/group'
import groupItem from '@/components/baseComponent/group-item'
import linkCell from '@/components/baseComponent/link-cell'
import attrShow from '@/components/baseComponent/attrShow'
import scroller from '@/components/baseComponent/scroller'



export default (Vue) => {
    Vue.component("bgScroller", scroller)
    Vue.component("attrShow", attrShow)
    Vue.component("bgHeader", bgHeader)
    Vue.component("bgNav", bgNav)
    Vue.component("collapseTransition", autoTransition)
    Vue.component("collapseLeftTransition", autoLeftTransition)
    Vue.component("bgTab", tab)
    Vue.component("bgTabItem", tabItem)
    Vue.component("bgSwiperTab", swiperTab)
    Vue.component("bgSwiperTabItem", swiperTabItem)
    Vue.component("bgGroup", group)
    Vue.component("bgGroupItem", groupItem)
    Vue.component("bgLinkCell", linkCell)
}