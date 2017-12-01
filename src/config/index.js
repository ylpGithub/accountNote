let ajaxUrl = ''
let routerMode = 'history'

if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {
  // ajaxUrl = 'http://cangdu.org:8001';
}

export {
  ajaxUrl,
  routerMode
}
