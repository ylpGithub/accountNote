/**
 * Created by yanglp on 2017/11/16
 */
import App from '../App'

const manage = r => require.ensure([], () => r(require('../pages/manage/manage')), 'manage')

export default {
  path: '/',
  component: App,
  children: [
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      meta: { btmNavShow: true }
    }
  ]
}
