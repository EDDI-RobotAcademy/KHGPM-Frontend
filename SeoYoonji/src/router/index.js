import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BindTest from "@/views/lecture/bind/BindTest.vue"
import ClickEventTest from "@/views/lecture/clickEvent/ClickEventTest.vue"
import ComponentTest from "@/views/lecture/componentTest/ComponentTest.vue"

import EmitTestBoardGame from '@/views/lecture/emitTest/EmitTestBoardGame.vue'

import AxiosTestPage from '@/views/lecture/axiosTest/AxiosTestPage.vue'

import JpaBoardListPage from "@/views/lecture/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/lecture/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from '@/views/lecture/board/JpaBoardReadPage.vue'

Vue.use(VueRouter)
// url 맵핑
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  {
    path: '/board-list-page',
    name: 'JpaBoardListPage',
    component: JpaBoardListPage
  },
  {
    path: '/board-register',
    name: 'JpaBoardRegisterPage',
    component: JpaBoardRegisterPage
  },
  {
    path: '/board-read/:boardId',  // ':' 가변인자 처리
    name: 'JpaBoardReadPage',
    components: {
      default: JpaBoardReadPage
    },
    props: { //router 이동할 때 파라미터 전달 위해서는 필요함
      default: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
