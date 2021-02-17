import { hello } from './js/sub'

console.log('Hello World')

hello()

window.addEventListener('load', () => {
  console.log('IE11で表示されたらJavaScript Transpile成功')
})
