import { createRouter, createWebHistory } from 'vue-router'
import Page404 from "@/views/Page404"
import Home from '../views/Home.vue'
import VideoListPage from "@/views/VideoListPage"
import VideoSinglePage from "@/views/VideoSinglePage"
import ArticleListPage from "@/views/ArticleListPage"
import ArticleSinglePage from "@/views/ArticleSinglePage"
import FaqListPage from "@/views/FaqListPage"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'VideoListPage',
    component: VideoListPage
  },
  {
    path: '/videos/:id',
    name: 'VideoSinglePage',
    component: VideoSinglePage
  },
  {
    path: '/articles',
    name: 'ArticleListPage',
    component: ArticleListPage
  },
  {
    path: '/articles/:id',
    name: 'ArticleSinglePage',
    component: ArticleSinglePage
  },
  {
    path: '/faq',
    name: 'FaqListPage',
    component: FaqListPage
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
