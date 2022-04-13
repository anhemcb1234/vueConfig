import VueRoute from 'vue-router'
import Vue from 'vue'
Vue.use(VueRoute);

export const router = new VueRoute({
   routes: [
     {
      path: '/',
      name:'home',
      component: ()=>import('@/components/ControlCounter.vue')
     },
   ],
   mode:'history'
})
