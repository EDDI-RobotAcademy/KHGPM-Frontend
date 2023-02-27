import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BindTest from '@/views/lecture/bind/BindTest.vue';
import ClickEventTest from '@/views/lecture/clickEvent/ClickEventTest.vue';
import ComponentTest from '@/views/lecture/componentTest/ComponentTest.vue';
import EmitTestBoardGame from '@/views/lecture/emitTest/EmitTestBoardGame.vue';

import AxiosTestPage from '@/views/lecture/axiosTest/AxiosTestPage1.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/bind-test',
    name: 'BindTest',
    component: BindTest,
  },
  {
    path: '/click-event-test',
    name: 'ClickEventTest',
    component: ClickEventTest,
  },
  {
    path: '/component-test',
    name: 'ComponentTest',
    component: ComponentTest,
  },
  {
    path: '/emit-test',
    name: 'EmitTestBoardGame',
    component: EmitTestBoardGame,
  },
  {
    path: '/axios-test',
    name: 'AxiosTestPage',
    component: AxiosTestPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
