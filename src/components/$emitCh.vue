<template>
 <div class="train-city">
    <h3>父组件传给子组件的数据：{{sendData}}</h3>
    <br/><button @click='select()'>点击子组件</button>
  </div>

</template>

<script>
export default {
  name: 'emitCh', // 相当于一个全局 ID，可以不写，写了可以提供更好的调试信息
  props: ['sendData'], // 用来接收父组件传给子组件的数据
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    select () {
      let data = {
        city: '杭州'
      }
      this.$emit('updateInfo', data)// select事件触发后，自动触发updateInfo事件
    }
  }
}
</script>
