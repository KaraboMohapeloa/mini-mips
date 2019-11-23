import Vue from 'vue'
import Router from 'vue-router'
 
import BoxReader from '@/components/BoxReader'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'BoxReader',
      component: BoxReader
    }
  ]
})