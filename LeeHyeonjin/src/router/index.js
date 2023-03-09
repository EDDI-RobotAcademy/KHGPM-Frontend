import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BindTest from "@/views/lecture/bind/BindTest.vue"
import ClickEventTest from "@/views/lecture/clickEvent/ClickEventTest.vue"
import ComponentTest from "@/views/lecture/componentTest/ComponentTest.vue"
import EmitTestBoardGame from "@/views/lecture/emitTest/EmitTestBoardGame.vue"

import AxiosTestPage from "@/views/lecture/axiosTest/AxiosTestPage.vue"
import JpaBoardListPage from "@/views/lecture/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/lecture/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from "@/views/lecture/board/JpaBoardReadPage.vue"
import JpaBoardModifyPage from "@/views/lecture/board/JpaBoardModifyPage.vue"

import ProductBoardListPage from "@/views/lecture/productBoard/ProductBoardListPage.vue"
      // 아래 component(=파일 이름으로 하기) from 경로
Vue.use(VueRouter)

// url controller
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
  } ,
  {
    path: '/axios-test-page',
    name: 'AxiosTestPage',
    component: AxiosTestPage
  } ,
  {
    path: '/board-list-page',
    name: 'JpaBoardListPage',
    component: JpaBoardListPage
  } ,
  {
    path: '/board-register',
    name: 'JpaBoardRegisterPage',
    component: JpaBoardRegisterPage
  },
  {
    path: '/board-read/:boardId',
    name: 'JpaBoardReadPage',
    components: {
      default: JpaBoardReadPage
    },
    props: {
      default: true // router로 이동할 때 props가 전달되게 함 == pass
    }
  }, 
  {
    path: '/board-modify/:boardId',
    name: 'JpaBoardModifyPage',
    components: {
      default: JpaBoardModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product',
    name: 'ProductBoardListPage',
    component: ProductBoardListPage 
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
