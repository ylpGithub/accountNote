/**
 * Created by yanglp on 2017/11/16
 */
import App from '../App'

const asset = r => require.ensure([], () => r(require('../pages/asset/asset')), 'asset')

export default {
  path: '/',
  component: App,
  children: [
    {
      path: '/asset',
      name: 'asset',
      component: asset,
      meta: { btmNavShow: true }
    }
  ]
}
