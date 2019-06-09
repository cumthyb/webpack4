// header.js

function Header(params) {
  var root = document.getElementById('root')

  var node = document.createElement('div')
  node.innerHTML = 'header'
  root.append(node)
}
export default Header