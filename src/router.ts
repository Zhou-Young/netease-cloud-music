import Vue from 'vue';
import Router from 'vue-router';
import FindMusic from './views/findMusic/FindMusic.vue';

Vue.use( Router );

export default new Router( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/findMusic/discover',
    },
    {
      path: '/findMusic',
      name: 'findMusic',
      component: FindMusic,
      redirect: '/findMusic/discover',
      children: [
        {
          path: '/findMusic/discover',
          name: 'discover',
          component: () => import(/* webpackChunkName: "discover" */ './views/findMusic/Discover.vue' ),
        },
        {
          path: '/findMusic/toplist',
          name: 'toplist',
          component: () => import(/* webpackChunkName: "toplist" */ './views/findMusic/Toplist.vue' ),
        },
        {
          path: '/findMusic/playlist',
          name: 'playlist',
          component: () => import(/* webpackChunkName: "playlist" */ './views/findMusic/Playlist.vue' ),
        },
        {
          path: '/findMusic/djradio',
          name: 'djradio',
          component: () => import(/* webpackChunkName: "djradio" */ './views/findMusic/Djradio.vue' ),
        },
        {
          path: '/findMusic/artist',
          name: 'artist',
          component: () => import(/* webpackChunkName: "artist" */ './views/findMusic/Artist.vue' ),
        },
        {
          path: '/findMusic/album',
          name: 'album',
          component: () => import(/* webpackChunkName: "album" */ './views/findMusic/Album.vue' ),
        },
      ],
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      // route level code-splitting
      // this generates a separate chunk (myMusic.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "myMusic" */ './views/MyMusic.vue' ),
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import(/* webpackChunkName: "friends" */ './views/Friends.vue' ),
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import(/* webpackChunkName: "mall" */ './views/Mall.vue' ),
    },
    {
      path: '/musician',
      name: 'musician',
      component: () => import(/* webpackChunkName: "musician" */ './views/Musician.vue' ),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import(/* webpackChunkName: "download" */ './views/Download.vue' ),
    },
  ],
} );
