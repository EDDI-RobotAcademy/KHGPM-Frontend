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

import ProductListPage from "@/views/lecture/product/ProductListPage.vue"
import ProductReadPage from "@/views/lecture/product/ProductReadPage.vue"
import ProductModifyPage from "@/views/lecture/product/ProductModifyPage.vue"
import ProductRegisterPage from "@/views/lecture/product/ProductRegisterPage.vue"

import FileUploadPage from "@/views/lecture/file/FileUploadPage.vue"
import ImageGalleryPage from "@/views/lecture/gallery/ImageGalleryPage.vue"

// import LifeCyclePage from "@/views/lecture/lifecycle/LifeCyclePage.vue"
import CarouselPage from "@/views/lecture/carouselTest/CarouselPage.vue"
import DialogTestPage from "@/views/lecture/dialogTest/DialogTestPage.vue"
import TableTestPage from "@/views/lecture/tableTest/TableTestPage.vue"
import TableExercisePage from "@/views/lecture/tableTest/TableExercisePage.vue"


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

  //게시판
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

  //상품 게시판
  {
    path: '/product-list-page',
    name: 'ProductListPage',
    component: ProductListPage
  },
  {
    path: '/product-register',
    name: 'ProductRegisterPage',
    component: ProductRegisterPage
  },
  {
    path: '/product-read/:productId',
    name: 'ProductReadPage',
    components: {
      default: ProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify/:productId',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true
    }
  },
  
  //이미지 파일업로드
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
  //크로셀 베너
  // {
  //   path: '/life-cycle',
  //   name: 'LifeCyclePage',
  //   component: LifeCyclePage
  // },
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router