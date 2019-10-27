import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import projects from './views/projects.vue'
import about from './views/about.vue'
import contact from './views/contact.vue'
import skills from './views/skills.vue'
import loadingPage from './views/loadingPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/loadingPage',
      name: 'loadingPage',
      component: loadingPage
    },
  ]
})
