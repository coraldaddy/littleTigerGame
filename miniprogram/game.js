import './js/libs/weapp-adapter'
import './js/libs/symbol'

import Main from './js/main'

new Main()

/*
const canvas = wx.createCanvas()
const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#1aad19' // 矩形颜色
// context.fillRect(0, 0, 100, 100) // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)
// context.fillRect(canvas.width / 2 - 50, 0, 100, 100)
const { windowWidth, windowHeight } = wx.getSystemInfoSync()
function drawRect(x, y) {
  context.clearRect(x, y-1, 101, 100)
  context.fillRect(x, y, 100, 100)
}

drawRect(canvas.width / 2 - 50, 0)
const rectX = canvas.width / 2 - 50
let rectY = 0
var a = setInterval(function () {
  console.log(rectX)
  console.log(rectY)
  if (rectY >= windowHeight){
    clearInterval(a)
  }
  drawRect(rectX, rectY++)
}, 16)

const context1 = canvas.getContext('2d')
const image = wx.createImage()
const imgX = canvas.width / 2 - 50
let imgY = 500
image.onload = function () {
  context1.drawImage(image, imgX, imgY,100,100)
}
image.src = 'images/hero.png'
console.log(image.clientX)
console.log(image.x)
console.log(image.imgX)
console.log(image.rectX)

let touchX = imgX
let touchY = imgY

wx.onTouchMove(function (res) {
  context1.clearRect(touchX, touchY, 100, 100); // 清除画布上原有的飞机
  touchX = res.changedTouches[0].clientX-50 // 重新判断当前触摸点x坐标
  touchY = res.changedTouches[0].clientY-50 // 重新判断当前触摸点x坐标
  context1.drawImage(image, touchX, touchY,100,100);
})

*/