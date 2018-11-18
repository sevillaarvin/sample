import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Library from '@/components/Library'
import Recent from '@/components/Recent'
import Search from '@/components/Search'
import Album from '@/components/Album'
import Song from '@/components/Song'
import RecentSong from '@/components/RecentSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/library',
      name: 'Library',
      component: Library
    },
    {
      path: '/recent',
      name: 'Recent',
      component: Recent
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      beforeEnter: (to,from,next) => {
        console.log(to,from,next)
        next()
      }
    },
    {
      path: '/library/:album',
      name: 'Album',
      component: Album
    },
    {
      path: '/library/:album/:song',
      name: 'Song',
      component: Song
    },
    {
      path: '/recent/:song',
      name: 'RecentSong',
      component: RecentSong
    },
    {
      path: '/search/:song',
      name: 'SearchSong',
      beforeEnter: (to,from,next) => {
        console.log(to,from,next)
        const song = to.params.song
        function getAlbum(song) {return 9}
        const album = getAlbum(song)
        next("/library/" + album + "/" + song)
      }
    },
  ],
  mode: "history"
})
