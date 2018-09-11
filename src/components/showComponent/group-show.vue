<template>
    <div>
        <bg-header>
            <div slot="left">
                <i class="fa fa-chevron-left" @click="goBack"></i>
            </div>
            <div slot="right">
                <i class="fa fa-repeat"></i>
            </div>
        </bg-header>

        <bg-group labelAlign="left" label-margin-right="0.4rem" label-width="20%" label-align="right" label-color="rgba(0,0,0)" title="hello title" footer-title="this is footer">
            <bg-group-item label="这是第一个" label-color="rgba(0,0,0)">
                <!-- <bg-link-cell is-link value="进行中">
                    我是
                </bg-link-cell> -->
                <div>
                    测试
                </div>
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
        <div style="margin-top: 0.5rem">
            <attr-show :attr-list="attrList"></attr-show>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'showGroup',
        data() {
            return {
                attrList: [
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
                ]
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>