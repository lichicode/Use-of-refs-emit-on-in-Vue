<template>
 <div>
    <h2>接收到父组件数据：{{getMsg}}</h2>
    <br/>
  </div>

</template>

<script>
export default {
  name: 'refsCh', // 相当于一个全局 ID，可以不写，写了可以提供更好的调试信息
  data () {
    return {
      getMsg: '无'
    }
  },
  computed: {

  },
  methods: {
    update (res) {
      this.getMsg = res
      console.log(res)// 父组件中的数据
    }
  }
}
</script>
