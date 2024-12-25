export default {
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/timeline', component: '@/pages/Timeline' },
    { path: '/about', component: '@/pages/About' }
  ],
  antd: {
    dark: false,
    compact: false,
  },
  mfsu: false,
  fastRefresh: {},
  webpack5: {}
}
