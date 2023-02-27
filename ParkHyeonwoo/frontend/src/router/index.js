import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BindTest from '@/views/lecture/bind/BindTest.vue'
import ClickEventTest from '@/views/lecture/clickEvent/ClickEventTest.vue'
import ComponentTest from '@/views/lecture/componentTest/ComponentTest.vue'

import EmitTestBoardGame from '@/views/lecture/emitTest/EmitTestBoardGame.vue'

import AxiosTestPage from '@/views/lecture/axiosTest/AxiosTestPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', // 매핑 x 그냥 짓는 이름
    component: HomeView // vue 파일의 name 과 매핑 
  },
  {
    path: '/bind-test',
    name: 'BindTest',
    component: BindTest
  },
  {
    path: '/click-test',
    name: 'ClickEventTest',
    component: ClickEventTest
  },
  {
    path: '/component-test',
    name: 'ComponentTest',
    component: ComponentTest
  },
  {
    path: '/emit-test-board-game',
    name: 'EmitTestBoardGame',
    component: EmitTestBoardGame
  },
  {
    path: '/axios-test-page',
    name: 'AxiosTestPage',
    component: AxiosTestPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router