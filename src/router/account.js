/**
 * Created by yanglp on 2017/11/16
 */
import App from '../App'

const account = r => require.ensure([], () => r(require('../pages/account/account')), 'account')

export default {
  path: '/',
  components: App,
  children: [
    {
      path: '/account',
      name: 'account',
      component: account,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        btmNavShow: true
      }
    }
  ]
}
