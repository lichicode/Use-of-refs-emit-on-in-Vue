<template>
 <div>
    <h1>B组件：{{msg}}</h1>
 </div>
</template>
<script>
import emptyVue from '../utils/emptyVue.js' // vue的空白实例（兄弟间的桥梁）
export default {
  data () {
    return {
      msg: '无'
    }
  },
  mounted () {
    emptyVue.$on('aevent', (val) => { // 监听事件aevent，回调函数要使用箭头函数;
      console.log(val)
      this.msg = val
    })
  }
}
</script>
