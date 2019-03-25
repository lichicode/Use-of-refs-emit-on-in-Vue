<template>
  <div>
    <div>$refs父组件调用子组件的方法，可以传递数据</div>
      <h1>父组件数据：{{msg}}</h1>
    <refs-ch ref="child"></refs-ch>
    <button @click="updateCity()">点击父组件</button>
  </div>
</template>

<script>
import refsCh from './$refsCh'
export default {
  name: 'refsFa',
  components: { refsCh },
  data () {
    return {
      msg: '北京'
    }
  },
  methods: {
    updateCity () { // 触发子组件城市选择-选择城市的事件
      this.$refs.child.update(this.msg) // 调用子组件的方法，child是上边ref起的名字，updateCity是子组件的方法。
    }
  }
}
</script>
