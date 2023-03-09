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
import JpaBoardModifyPage from '@/views/lecture/board/JpaBoardModifyPage.vue'

import JpaProductListPage from "@/views/lecture/product/JpaProductListPage.vue"
import JpaProductRegisterPage from '@/views/lecture/product/JpaProductRegisterPage.vue'
import JpaProductReadPage from '@/views/lecture/product/JpaProductReadPage.vue'
import JpaProductModifyPage from '@/views/lecture/product/JpaProductModifyPage.vue'

import FileUploadPage from '@/views/lecture/file/FileUploadPage.vue'
import ImageGalleryPage from '@/views/lecture/gallery/ImageGalleryPage.vue'

import CarouselPage from '@/views/lecture/carouselTest/CarouselPage.vue'
import DialogTestPage from '@/views/lecture/dialogTest/DialogTestPage.vue'
import TableTestPage from '@/views/lecture/tableTest/TableTestPage.vue'
import TableExercisePage from '@/views/lecture/tableTest/TableExercisePage.vue'

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
  {
    path: '/board-modify/:boardId',  // ':' 가변인자 처리
    name: 'JpaBoardModifyPage',
    components: {
      default: JpaBoardModifyPage
    },
    props: { //router 이동할 때 파라미터 전달 위해서는 필요함
      default: true
    }
  },
  {
    path: '/product-list-page',
    name: 'JpaProductListPage',
    component: JpaProductListPage
  },
  {
    path: '/product-register',
    name: 'JpaProductRegisterPage',
    component: JpaProductRegisterPage
  },
  {
    path: '/product-read/:productId', 
    name: 'JpaProductReadPage',
    components: {
      default: JpaProductReadPage
    },
    props: { 
      default: true
    }
  },
  {
    path: '/product-modify/:productId', 
    name: 'JpaProductModifyPage',
    components: {
      default: JpaProductModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/file-upload',
    name: 'FileUploadPage',
    component: FileUploadPage
  },
  {
    path: '/image-gallery',
    name: 'ImageGalleryPage',
    component: ImageGalleryPage
  },
  {
    path: '/carousel-page',
    name: 'CarouselPage',
    component: CarouselPage
  },
  {
    path: '/dialog-test-page',
    name: 'DialogTestPage',
    component: DialogTestPage
  },
  {
    path: '/table-test-page',
    name: 'TableTestPage',
    component: TableTestPage
  },
  {
    path: '/table-exercise-page',
    name: 'TableExercisePage',
    component: TableExercisePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
