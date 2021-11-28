const Home = () => import('./pages/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export default routes
