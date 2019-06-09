//content.js

function Content(params) {
  var root = document.getElementById('root')

  var node = document.createElement('div')
  node.innerHTML = 'content'
  root.append(node)
}
export default Content