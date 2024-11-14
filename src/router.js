// src/router.js (atau src/router/index.js)
import Vue from 'vue';
import Router from 'vue-router';
import TaskPage from './components/TaskPage.vue'; // Halaman untuk daftar tugas
import ProfilePage from './components/Profile.vue'; // Halaman untuk profil

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task',
      component: TaskPage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
  ]
});
