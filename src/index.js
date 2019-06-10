
import img312k from '../static/imgs/312k.png'
import img7k from '../static/imgs/7.6k.png'
import './index.css'

var root=document.getElementById('root')

var img312=new Image()
img312.src=img312k
img312.classList.add('img312')
root.appendChild(img312)


var img7=new Image()
img7.src=img7k
img7.classList.add('img7')
root.appendChild(img7)