<template>
    <div class="bg-group-cell">
        <div class="bg-group-cell-label" :style="{'margin-right':labelMargR,'width':curlabelWidth,'color':curlabelColor}">
          <span class="bg-group-cell-label-con" v-if="label" v-html="label" :style="{'text-align':curlabelAlign}"></span>
          <slot name="label"></slot>
        </div>
        
        <div class="bg-group-cell-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bgGroupItem',
        props: {
            label: String,
            labelColor: String,
            labelWidth: String,
            labelAlign: String,
            labelMarginRight: String
        },
        data() {
            return {

            }
        },
        methods: {
            formatterAlign(val) {
                switch (val) {
                    case "center":
                        return "center"
                        break;
                    case "right":
                        return "flex-end"
                        break;
                    case "left":
                        return "flex-start"
                        break;
                    case "between":
                        return "space-between"
                        break;
                    case "around":
                        return "space-around"
                        break;
                    default:
                        return "flex-end";
                }
            }
        },
        computed: {
            labelMargR: function () {
                let parentLabelMargR = this.$parent.labelMarginRight;
                if (this.labelMarginRight) {
                    return this.labelMarginRight;
                }
                else if (parentLabelMargR) {
                    return parentLabelMargR;
                }
                else {
                    return "0.266rem"
                }
            },
            curlabelWidth: function () {
                let parentLabelWidth = this.$parent.labelWidth;
                if (this.labelWidth) {
                    return this.labelWidth;
                }
                else if (parentLabelWidth) {
                    return parentLabelWidth;
                }
                else {
                    return "2.666rem"
                }
            },
            curlabelAlign: function () {
                let parentLabelAlign = this.$parent.labelAlign;
                if (this.labelAlign) {
                    return this.labelAlign;
                }
                else if (parentLabelAlign) {
                    return parentLabelAlign;
                }
                else {
                    return "right"
                }
            },
            curlabelColor: function () {
                let parentLabelColor = this.$parent.labelColor;
                if (this.labelColor) {
                    return this.labelColor;
                }
                else if (parentLabelColor) {
                    return parentLabelColor;
                }
                else {
                    return "rgb(0,0,0)"
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>