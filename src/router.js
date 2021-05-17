import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/coaches', component: null },
    {
      path: '/coaches/:id',
      component: null,
      children: [{ path: 'contact', component: null }] //coaches/c1/contact
    { path: '/register', component: null },
    { path: '/cont', component: null }
  ]
});

export default router;
