export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home')
  },
  { path: '/:pathMatch(.*)', redirect: { name: 'home' } }
]
