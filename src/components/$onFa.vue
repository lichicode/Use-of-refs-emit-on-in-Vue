<template>
     <div>
       <div>兄弟组件之间相互传递数据</div>
      <onChA></onChA>
      <br/>
      <onChB></onChB>
     </div>
</template>
<script>
import onChA from './$onChA'
import onChB from './$onChB'
export default {
  components: {
    onChA,
    onChB
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>
