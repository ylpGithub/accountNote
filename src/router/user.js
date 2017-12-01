/**
 * Created by yanglp on 2017/11/16
 */
import App from '../App'

const me = r => require.ensure([], () => r(require('../pages/user/me')), 'me')

export default {
  path: '/',
  component: App,
  children: [
    {
      path: '/me',
      name: 'me',
      component: me,
      meta: { btmNavShow: true }
    }
  ]
}
