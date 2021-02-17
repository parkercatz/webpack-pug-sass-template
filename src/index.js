import { hello } from './js/sub'
import './scss/style.scss'

console.log('Hello World')

hello()

window.addEventListener('load', () => {
  console.log('IE11で表示されたらJavaScript Transpile成功')
})
