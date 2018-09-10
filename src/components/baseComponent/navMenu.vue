<template>
    <div class="bg-nav" :style="{backgroundColor:backgroundColor,color:defaultColor}">
        <div v-for="(item,index) in dataList" :key="item.id" class="nav-items">
            <div class="nav-item" @click="selectItem(item,dataList)" :style="[item.id === defaultSelectid?bgNavActiveClass:'']">
                <span v-html="item.icon"></span>
                <span class="nav-label">{{item.label}}</span>

                <span v-if="item.children" class="fa fa-chevron-down drog-icon" :class="{'rotate-icon':item.childrenIsShow}"></span>

            </div>
            <collapse-transition>
                <bg-nav :active-color="activeColor" :active-bg-color="activeBgColor" :backgroundColor="curbackgroundColor" :defaultColor="defaultColor"
                    v-show="item.childrenIsShow" @open="openChild" @close="closeChild" v-if="item.children" :list="item.children"
                    :unique-opened="uniqueOpened" @select="childSelect" :default-selectid.sync="activeId">
                    </bg-nav>
            </collapse-transition>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'bgNav',
        props: {
            backgroundColor: {
                default: 'rgb(84, 92, 100)',
                type: String,
                required: false
            },
            defaultColor: {
                default: '#ffffff',
                type: String,
                required: false
            },
            activeColor: {
                default: 'rgb(255, 208, 75)',
                type: String,
                required: false
            },
            activeBgColor: {
                default: '#000000',
                type: String,
                required: false
            },
            list: {
                default: function () {
                    return []
                },
                type: Array,
                required: false
            },
            defaultSelectid: {
                type: null,
                required: true
            },
            uniqueOpened: {
                default: true,
                type: Boolean,
                required: false
            }
        },
        computed: {
            bgNavActiveClass() {

                return {
                    backgroundColor: this.activeBgColor,
                    color: this.activeColor
                }


            }
        },
        data() {
            return {
                activeId: this.defaultSelectid,
                dataList: this.list,
                dataPath: [],
                curbackgroundColor: this.backgroundColor
            }
        },
        watch: {
            defaultSelectid(curVal, oldVal) {
                this.activeId = curVal;
            }
        },
        methods: {
            cloneObj(origin) {
                if (origin instanceof Array) {
                    origin = [...origin]
                }
                else if (origin instanceof Object) {
                    origin = Object.assign({}, origin)
                }
                for (let prop in origin) {
                    origin[prop] = typeof origin[prop] === 'object' ? this.cloneObj(origin[prop]) : origin[prop];
                }

                return origin;
            },
            selectItem(item, list) {
                let copyItem = this.deleteDefinedProperty(this.cloneObj(item));
                //let copyItem ={}
                if (item.children) {
                    this.handleOpenOrCloseChild(item, list, copyItem);
                }
                else {
                    this.activeId = item.id;
                    this.dataPath = item.parentPath;
                    this.$emit('update:defaultSelectid', item.id);
                    this.$emit("select", copyItem, [...item.parentPath]);
                }
            },
            childSelect(item, selectPath) {
                this.$emit('update:defaultSelectid', item.id);
                this.$emit("select", item, selectPath)
            },
            openChild(item, selectPath) {
                this.$emit("open", item, selectPath)
            },
            closeChild(item, selectPath) {
                this.$emit("close", item, selectPath)
            },
            handleOpenOrCloseChild(item, list, objitem) {
                if (this.uniqueOpened) {
                    list.forEach((val, ind) => {
                        if (val !== item) {
                            val.childrenIsShow = false
                        }
                    })
                    item.childrenIsShow = !item.childrenIsShow;
                }
                else {
                    item.childrenIsShow = !item.childrenIsShow;
                }
                if (item.childrenIsShow) {
                    this.$emit("open", objitem, [...item.parentPath]);
                }
                else {
                    this.$emit("close", objitem, [...item.parentPath]);
                }

            },
            deleteDefinedProperty(item) {
                delete item.childrenIsShow;
                delete item.parentPath;
                if (item.children) {
                    item.children.forEach((val) => {
                        this.deleteDefinedProperty(val)
                    })
                }
                return item;
            },
            handListData(list, ...ids) {
                this.$set(list, 'parentPath', [])
                list.parentPath.push(...ids)
                this.$set(list, 'childrenIsShow', false)
                if (list.children) {
                    list.children.forEach((val, ind) => {
                        this.handListData(val, ...list.parentPath, val.id)
                    })
                }
            },
            initData() {
                this.dataList.forEach((val, ind) => {
                    this.handListData(val, val.id);
                })

            }
        },
        mounted() {
            this.initData()
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>