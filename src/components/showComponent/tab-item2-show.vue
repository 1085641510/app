<template>
    <div class="hello">
        <bg-header>
            <div slot="left">
                <i class="fa fa-chevron-left" @click="goBack"></i>
            </div>
            <div slot="title">
                tab2 展示
            </div>
            <div slot="right">
                <i class="fa fa-repeat"></i>
            </div>
        </bg-header>
    </div>
</template>

<script>
    export default {
        name: 'tab2',
        data() {
            return {

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