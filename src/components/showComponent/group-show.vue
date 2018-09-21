<template>
    <div class="app_group">

        <bg-header>
            <div slot="left">
                <i class="fa fa-chevron-left" @click="goBack"></i>
            </div>
            <div slot="right">
                <i class="fa fa-repeat"></i>
            </div>
        </bg-header>
        <input v-model="value" type="text" />

        <router-link :to="{name:'tab1'}">Go to 1</router-link>
        <router-link :to="{name:'showTab'}">Go to 2</router-link>
        <bg-scroller lock-x scrollbar-y class="app_section">
            <div>
                <bg-group labelAlign="left" label-margin-right="0.4rem" label-width="20%" label-align="right" label-color="rgba(0,0,0)" title="hello title"
                    footer-title="this is footer">
                    <bg-group-item label="这是第一个" label-color="rgba(0,0,0)">
                        <bg-link-cell is-link value="进行中">
                            我是
                        </bg-link-cell>
                    </bg-group-item>
                    <bg-group-item labelAlign="left" label="hello">
                        <div>测试</div>
                    </bg-group-item>
                    <bg-group-item labelAlign="right" label="我是广告">
                        <div>测试</div>
                    </bg-group-item>
                    <bg-group-item labelAlign="right" label="我是广告">
                        <div>测试</div>
                    </bg-group-item>
                    </bg-group>
                    <div>
                        <attr-show :attr-list="groupAttrList" title="group 参数详解"></attr-show>
                    </div>
                    <button @click="addDom($event)">add</button>
                    <div style="margin-top: 0.5rem">
                        <attr-show :attr-list="scrollerAttrList" title="scroller 参数详解"></attr-show>
                    </div>
            </div>
        </bg-scroller>
        <div class="bg-router-contain">
            <transition :name="transitionName">
                <keep-alive>
                    <router-view class="router-view"></router-view>
                </keep-alive>
            </transition>
        </div>

    </div>
</template>

<script>
    import XScroll from 'vux-xscroll/build/cmd/xscroll.js'

    export default {
        name: 'showGroup',
        data() {
            return {
                groupAttrList: [
                    {
                        name: "title",
                        type: "String",
                        default: "",
                        remark: "分组的标题"
                    }, {
                        name: "titleColor",
                        type: "String",
                        default: "#999999",
                        remark: "分组标题的颜色"
                    }, {
                        name: "footerTitle",
                        type: "String",
                        default: "",
                        remark: "分组的尾标题"
                    }, {
                        name: "footerTitleColor",
                        type: "String",
                        default: "#999999",
                        remark: "分组尾标题的颜色"
                    }, {
                        name: "labelColor",
                        type: "String",
                        default: "rgb(0,0,0)",
                        remark: "为子元素设定统一label颜色"
                    }, {
                        name: "labelWidth",
                        type: "String",
                        default: "2.666rem",
                        remark: "为子元素设定统一label宽度"
                    }, {
                        name: "labelAlign",
                        type: "left right center",
                        default: "right",
                        remark: "为子元素设定统一对齐方式"
                    }, {
                        name: "labelMarginRight",
                        type: "String",
                        default: "0.266rem",
                        remark: "为子元素设定统的距离右边的距离"
                    }
                ],
                scrollerAttrList: [
                    {
                        name: "lockX",
                        type: "Boolean",
                        default: "false",
                        remark: "是否锁定X轴的滚动，相当于overflow-x:hidden"
                    }, {
                        name: "lockY",
                        type: "Boolean",
                        default: "false",
                        remark: "是否锁定Y轴的滚动，相当于overflow-y:hidden"
                    }, {
                        name: "scrollbarX",
                        type: "Boolean",
                        default: "false",
                        remark: "是否可见X轴的滚动条"
                    }, {
                        name: "scrollbarY",
                        type: "Boolean",
                        default: "false",
                        remark: "是否可见Y轴的滚动条"
                    }, {
                        name: "bounce",
                        type: "Boolean",
                        default: "true",
                        remark: "是否使用弹跳效果，超出边界时(使用:绑定)"
                    }, {
                        name: "useOriginScroll",
                        type: "Boolean",
                        default: "false",
                        remark: "是否使用原生的滚动条"
                    }, {
                        name: "useTransition",
                        type: "Boolean",
                        default: "true",
                        remark: "是否使用transiton效果"
                    }, {
                        name: "preventDefault",
                        type: "Boolean",
                        default: "true",
                        remark: "阻止触发click事件，touchstart会触发click"
                    }, {
                        name: "preventTouchMove",
                        type: "Boolean",
                        default: "false",
                        remark: "阻止触发mousemove默认事件"
                    }, {
                        name: "boundryCheck",
                        type: "Boolean",
                        default: "false",
                        remark: "是否在边界内滚动,会超出默认高度或宽度无限滑动。"
                    }, {
                        name: "stickyElements",
                        type: "String",
                        default: "",
                        remark: "dom的id，固定某一元素，滚动超出后会固定在上方"
                    }, {
                        name: "preventDefault",
                        type: "Boolean",
                        default: "true",
                        remark: "阻止触发click事件，touchstart会触发click"
                    }
                ],
                value: "hello",
                transitionName: 'bg-slide-forward',
                map: {}
            }
        },
        methods: {
            consoleMes() {
                console.log(23131)
            },
            addDom(e) {

                this.groupAttrList.push({
                    name: "新的add",
                    type: "Boolean",
                    default: "false",
                    remark: "是否锁定X轴的滚动，相当于overflow-x:hidden"
                })
            },
            goBack() {
                this.$router.go(-1);
            }
        },
        beforeRouteEnter(to, from, next) {
           
            next();

        },
        beforeRouteLeave(to, from, next) {
           
            next();

        },
        activated() {
            // 在keep-alive中有效 进入执行
            console.log("这是每次进入执行的")
        },
        deactivated() {
            // 在keep-alive中有效 离开执行
            console.log("这是每次离开执行的")
        },
        mounted() {

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
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .app_group {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }
    
    .app_section {
        overflow-y: auto;
        flex: 1;
    }
    
    .router-view {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
</style>