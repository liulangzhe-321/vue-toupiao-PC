// 项目的入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//加载全局样式
import './styles/index.less'
// 加载 element 组件库
import ElementUI from 'element-ui'

// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

// 全局注册 element 组件库
Vue.use(ElementUI)
Vue.config.productionTip = false
//创建vue实例
//把router 配置跟实例当中
//通过render 方法 把APP 根组件渲染到#APP中
new Vue({
  router,
  render: h => h(App)
    // mount("app")等价于  el:'#app'
}).$mount('#app')
