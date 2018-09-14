<template>
    <div class="bgLinkCell">
        <div class="bgLinkCellContent">
            <slot></slot>
        </div>
        
        <div class="bgLinkCellRightContent">  
            <div class="bgDisable" v-if="value" v-html="value"></div>
        
            <div class="bgLinkIcon bgDisable" v-if="isLink">
                <i class="fa fa-angle-right" aria-hidden="true"></i>    
            </div> 
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'bgLinkCell',
        props: {
            isLink: Boolean,
            value: String
        },
        data() {
            return {

            }
        },
        mounted(){
            
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    
</style>