<template>
    <div class='bg-nav'>
        <div v-for="item in list" :key="item.key" class="nav-items">
            <div class="nav-item">
                <span v-html="item.icon"></span>
                <span>{{item.label}}</span>
            </div>

            <bg-nav v-if="item.children" :list="item.children">

            </bg-nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bgNav',
    props: {
        navClass: {
            default: 'bg-nav',
            type: null,
            required: false
        },
        list: {
            default: function() {
                return []
            },
            type: Array,
            required: false
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
$baseFontSize :75px;

@function torem($px) {
    @return $px / $baseFontSize * 1rem;
}

.bg-nav {
    background-color: rgb(84, 92, 100);
    width: 100%;
    .nav-items {
        color: #fff;
        min-height: 70px;
        width: 100%;
        .nav-item {
            color: #fff;
            height: 70px;
            width: 100%;
            padding-left: 20px;
            line-height: 70px;
            &:hover {
                background-color: #000000;
            }
        }
        .bg-nav {
            .nav-item {
                padding-left: 40px;
            }
            .bg-nav {
                .nav-item {
                    padding-left: 60px;
                }
                .bg-nav {
                    .nav-item {
                        padding-left: 80px;
                    }
                    .bg-nav {
                        .nav-item {
                            padding-left: 100px;
                        }
                    }
                }
            }
        }
    }
}
</style>
