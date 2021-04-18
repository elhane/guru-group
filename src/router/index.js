import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import UIkit from '../views/UIkit';
import Ads from '../views/Ads';


Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: Home},
  { name: 'ui-kit', path: '/components', component: UIkit },
  { name: 'ads', path: '/advertisements', component: Ads },
]

const router = new VueRouter({
  routes
})

export default router
