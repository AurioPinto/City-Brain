import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Company from './components/Company.vue';
import History from './components/History.vue';
import Friends from './components/Friends.vue';
import IndustryBrain from './components/IndustryBrain.vue';
import CityBrain from './components/CityBrain.vue';
import DisplayBrain from './components/DisplayBrain.vue';
import AboutUs from './views/AboutUs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about_us',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutUs,
      children: [
        {
          path: 'company',
          name: 'Company',
          component: Company,
        },
        {
          path: 'history',
          name: 'History',
          component: History,
        },
        {
          path: 'friends',
          name: 'Friends',
          component: Friends,
        },
      ],
    },
    {
      path: '/view_brain',
      name: 'brain',
      component: () => import(/* webpackChunkName: "about" */ './views/ViewBrain.vue'),
      children: [
        {
          path: 'industryBrain',
          name: 'IndustryBrain',
          component: IndustryBrain,
        },
        {
          path: 'cityBrain',
          name: 'CityBrain',
          component: CityBrain,
        },
        {
          path: 'displayBrain',
          name: 'DisplayBrain',
          component: DisplayBrain,
        },
      ],
    },
    {
      path: '/vr_live',
      name: 'vrLive',
      component: () => import(/* webpackChunkName: "about" */ './views/VrLive.vue'),
    },
  ],
});
