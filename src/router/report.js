/**
 * Created by yanglp on 2017/11/16
 */
import App from '../App'

const report = r => require.ensure([], () => r(require('../pages/report/report')), 'report')

export default {
  path: '/',
  component: App,
  children: [
    {
      path: '/report',
      name: 'report',
      component: report,
      meta: { btmNavShow: true }
    }
  ]
}
