<template>
    <div>
        <h1>A组件：{{msg}}</h1>
        <br>
        <br>
        <input type="button" value="把A组件数据传给B组件" @click ="send">
    </div>
</template>
<script>
import emptyVue from '../utils/emptyVue.js' // vue的空白实例（兄弟间的桥梁）
export default {
  data () {
    return {
      msg: 'A组件数据'
    }
  },
  methods: {
    send: function () {
      emptyVue.$emit('aevent', this.msg) // 使用 $emit 自定义事件把数据带过去
    }
  }
}
</script>
