import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BindTest from "@/views/lecture/bind/BindTest.vue"
import ClickEventTest from "@/views/lecture/clickEvent/ClickEventTest.vue"
import ComponentTest from "@/views/lecture/componentTest/ComponentTest.vue"

import EmitTestBoardGame from "@/views/lecture/emitTest/EmitTestBoardGame.vue"
import AxiosTestPage from "@/views/lecture/axiosTest/AxiosTestPage.vue"


import practive from "@/views/practive/Practive.vue"
import VforTest from "@/views/practive/v-forTest/V-forTest.vue"
import VmodelTest from "@/views/practive/v-modelTest/V-modelTest.vue"
import Oneroom from "@/views/practive/codingApple/CodingApple"


import JpaBoardListPage from "@/views/lecture/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/lecture/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from "@/views/lecture/board/JpaBoardReadPage.vue"
import JpaBoardModifyPage from "@/views/lecture/board/JpaBoardModifyPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //name은 없어도 실행과 문제 없은걸로 판단됨 헷갈려하지 말자
    name: 'home',
    component: HomeView
  },
  {
    path: '/practive',
    name: 'Practive',
    component: practive
  },
  {
    path: '/v-for-page',
    name: 'VforPractive',
    component: VforTest
  },
  {
    path: '/v-model-page',
    name: 'VmodelPractive',
    component: VmodelTest
  },
  {
    path: '/oneroom-page',
    name: 'OneRoom',
    component: Oneroom
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
    path: '/board-read/:boardId',
    name: 'JpaBoardReadPage',
    components: {
      default: JpaBoardReadPage
    },
    props: {
      default: true
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router