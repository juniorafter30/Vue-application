import { createRouter, createWebHistory } from 'vue-router';

//importing components from coaches page
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';

//importing components from requests page
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';

//our alternative when the user will face a page that not exist
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }]
    }, //coaches/c1/contact
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
