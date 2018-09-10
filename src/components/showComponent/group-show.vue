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
        <div style="height: 20px;"></div>
        <bg-group label-margin-right="0.4rem" label-width="20%" label-align="right" label-color="red">
            <bg-group-item label="这是第一个" label-color="rgba(0,0,0)">
                <bg-link-cell is-link value="进行中">
                    我是
                </bg-link-cell>
            </bg-group-item>
            <bg-group-item label="hello">
                <div>llll</div>
            </bg-group-item>
            <bg-group-item label="hello">
                <div>llll</div>
            </bg-group-item>
            <bg-group-item label="hello">
                <div>llll</div>
            </bg-group-item>
        </bg-group>
    </div>
</template>

<script>
    export default {
        name: 'showGroup',
        data() {
            return {

            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>