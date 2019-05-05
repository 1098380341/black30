import Vue from 'vue'
import App from './App.vue'

// 导入样式
import './assets/statics/site/css/style.css'

// 导入首页
import index from './components/index.vue'
// 导入详情页
import detail from './components/detail.vue'

// 导入饿了吗插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 写规则  linkto后经过规则 在跳转响应的网页
const routes=[
  {
    path:'/',
    redirect:'/index' 
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/detail/:id',
    component:detail
  }
]

const router=new VueRouter({
  routes
})


Vue.config.productionTip = false

// 导入axios
import axios from 'axios'
Vue.prototype.$axios=axios;

// 
axios.defaults.baseURL = 'http://111.230.232.110:8899';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
