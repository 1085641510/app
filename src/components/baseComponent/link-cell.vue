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
            console.log(this.$el.scrollHeight,this.$el.clientHeight,this.$el.offsetHeight)
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .bgLinkCell {
        height: 24px;
        font-size: 18px;
        
        display: flex;
        width: 100%;
        align-items: center;
    }
    .bgLinkCellContent{
        height: 100%;
        flex: 1;
        display: flex;
       
        align-items: center;
    }
    .bgLinkCellRightContent{
        display: flex;
        height: 100%;
        
        align-items: center;
    }
</style>