/**
 * Created by yanglp on 2017/11/16
 */
import App from '../App'

const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')

export default {
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/asset'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { btmNavShow: false }
    }
  ]
}
