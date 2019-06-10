
var root = document.getElementById('root')

var btn = document.createElement("button")
btn.innerHTML = '点我啊'
root.appendChild(btn)

btn.onclick = function onBtnClick(params) {
  const arr = ['a', 'b', 'c', 'd']
  let _copy = []
  new Promise(() => {
    _copy = Array.from(arr)
    let str=''
    _copy.map(item=>{
      str+=item
    })
    console.log(str);
  })
  console.log(_copy)
}


