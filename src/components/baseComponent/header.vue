<template>
    <div class='bg-header' :style="{backgroundColor:backgroundColor,color:defaultColor}">
        <div class="left-icon">
           
            <slot name="left"></slot>
        </div>
        <div class="title" v-if="title" v-html="title"></div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="right-icon">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bgHeader',
        props: {
            title: [String, Number],
            defaultColor: {
                default: '#ffffff',
                type: String,
                required: false
            },
            backgroundColor: {
                default: '#222222',
                type: String
            }
        },
        data() {
            return {
                
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    
</style>