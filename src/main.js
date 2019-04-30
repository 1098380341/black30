import Vue from 'vue'
import App from './App.vue'

// 导入样式
import './assets/statics/site/css/style.css'

// 导入首页
import index from './components/index.vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes=[
  {
    path:'/index',
    component:index
  }
]

const router=new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
