<template>
  <div class="bg-attr-show">
    <div class="title" v-if="title" v-html="title"></div>
    <slot name="title"></slot>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in attrList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.type}}</td>
          <td>{{item.default}}</td>
          <td>{{item.remark}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'attrShow',
    props: {
      title: String,
      attrList: Array
    },
    data() {
      return {
        list: [
          {
            name: "",
            type: "",
            default: "",
            remark: ""
          }
        ]
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>