import Vue from 'vue'
import Router from 'vue-router'
// import RefsFa from '@/components/$refsFa'// 父组件
// import RefsCh from '@/components/$refsCh' // 子组件
// import EmitFa from '@/components/$emitFa'// 父组件
// import EmitCh from '@/components/$emitCh' // 子组件
import OnFa from '@/components/$onFa'// 父组件
import OnChA from '@/components/$onChA' // 子组件
import OnChB from '@/components/$onChB' // 子组件

Vue.use(Router)

export default new Router({
  // mode: 'history',       // 更改模式，去掉地址栏的 #
  routes: [
    // {
    //   path: '/',
    //   name: 'RefsFa',
    //   component: RefsFa,
    //   children: [{
    //     path: 'RefsCh',
    //     name: 'RefsCh',
    //     component: RefsCh
    //   }]
    // },
    // {
    //   path: '/',
    //   name: 'EmitFa',
    //   component: EmitFa,
    //   children: [{
    //     path: 'EmitCh',
    //     name: 'EmitCh',
    //     component: EmitCh
    //   }]
    // },
    {
      path: '/',
      name: 'OnFa',
      component: OnFa,
      children: [{
        path: 'OnChA',
        name: 'OnChA',
        component: OnChA
      },
      {
        path: 'OnChB',
        name: 'OnChB',
        component: OnChB
      }
      ]
    }
  ]
})
