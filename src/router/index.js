import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleCreate from '../views/ArticleCreate'
import ArticleList from '../views/ArticleList'
import ArticleCompile from '../views/ArticleCompile'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "",
    redirect: "/article/list"
  },
  {
    path: "/article/list",
    name: "article-list",
    component: ArticleList
  },
  {
    path: "/article/create",
    name: "article-create",
    component: ArticleCreate
  },
  {
    path: "/article/:id/compile",
    name: "article-compile",
    component: ArticleCompile
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
