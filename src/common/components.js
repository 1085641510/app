import bgHeader from '@/components/header'
import bgNav from '@/components/navMenu'
import autoTransition from '@/components/autoTransition'
import tab from '@/components/tab'
import tabItem from '@/components/tab-item'
import swiperTab from '@/components/swiper-tab'
import swiperTabItem from '@/components/swiper-tab-item'

export default (Vue) => {
    Vue.component("bgHeader", bgHeader)
    Vue.component("bgNav", bgNav)
    Vue.component("collapseTransition", autoTransition)
    Vue.component("bgTab", tab)
    Vue.component("bgTabItem", tabItem)
    Vue.component("bgSwiperTab", swiperTab)
    Vue.component("bgSwiperTabItem", swiperTabItem)
}