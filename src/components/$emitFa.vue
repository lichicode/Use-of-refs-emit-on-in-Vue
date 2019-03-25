<template>
  <div>
    <div>$emit子组件调用父组件的方法并传递数据</div>
    <h1>父组件数据：{{msg}}</h1>
    <emit-ch @updateInfo="updateInfo" :sendData="msg"></emit-ch>
  </div>
</template>
<script>
import emitCh from './$emitCh'
export default {
  name: 'emitFa',
  components: { emitCh },
  data () {
    return {
      msg: '北京'
    }
  },
  methods: {
    updateInfo (data) { // 点击子组件按钮时触发事件
      console.log(data)
      this.msg = data.city // 改变了父组件的值
    }
  }
}
</script>
