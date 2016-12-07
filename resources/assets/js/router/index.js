import A0 from '../components/Example.vue';
import A1 from '../components/Example1.vue';
import A2 from '../components/Example2.vue';

const routes =  [
		{
      path: '/a0',
      component: A0,
    },
    {
      path: '/a1',
      component: A1,
    },
    {
      path: '/a2',
      component: A2,
    },
    {
      path: '*',
      component: A0,
    }
  ];

export default routes;
