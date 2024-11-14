import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TaskPage from './components/TaskPage.vue';
import ProfilePage from './components/Profile.vue';

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
