// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BindTest from "@/views/lecture/bind/BindTest.vue"
import ClickEventTest from  "@/views/lecture/clickEvent/ClickEventTest.vue"
import ComponentTest from "@/views/lecture/componentTest/ComponentTest.vue"
import EmitTestBoardGame from "@/views/lecture/emitTest/EmitTestBoardGame.vue"
import AxiosTestPage from "@/views/lecture/axiosTest/AxiosTestPage.vue"
import JpaBoardListPage from "@/views/lecture/board/JpaBoardListPage.vue"
import JpaBoardRegisterPage from "@/views/lecture/board/JpaBoardRegisterPage.vue"
import JpaBoardReadPage from "@/views/lecture/board/JpaBoardReadPage.vue"
import JpaBoardModifyPage from "@/views/lecture/board/JpaBoardModifyPage"
import JpaProductListPage from "@/views/lecture/product/JpaProductListPage"
import  JpaProductRegisterPage from "@/views/lecture/product/JpaProductRegisterPage"
import JpaProductReadPage from "@/views/lecture/product/JpaProductReadPage"
import FileUploadPage from "@/views/lecture/file/FileUploadPage"
import ImageGalleryPage from "@/views/lecture/gallery/ImageGalleryPage"
import CarouselPage from "@/views/lecture/carouselTest/CarouselPage"
import LifeCyclePage from "@/views/lecture/lifecycle/LifeCyclePage"
import DialogTestPage from "@/views/lecture/dialogTest/DialogTestPage.vue"
import TableTestPage from "@/views/lecture/tableTest/TableTestPage.vue"
import TableExercisePage from "@/views/lecture/tableTest/TableExercisePage.vue"

Vue.use(VueRouter)

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
    path: '/file-upload-page',
    name: 'FileUploadPage',
    component: FileUploadPage
  },
  {
    path: '/image-gallery',
    name: 'ImageGalleryPage',
    component: ImageGalleryPage
  },
  {
    path: '/carousel-gallery',
    name: 'CarouselPage',
    component: CarouselPage
  },
  {
    path: '/life-cycle',
    name: 'LifeCyclePage',
    component: LifeCyclePage
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
  // {
  //   path: '/product-read/:productId',
  //   name: 'JpaProductReadPage',
  //   components: {
  //     default: JpaProductReadPage
  //   },
  //   props: {
  //     default: true
  //   }
  // },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router