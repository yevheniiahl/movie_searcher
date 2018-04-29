import Vue from 'vue'
import Router from 'vue-router'
import movie_searcher from '@/components/movie_searcher'
import movie from '@/components/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie_searcher',
      component: movie_searcher
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: movie
    },

  ]
})
