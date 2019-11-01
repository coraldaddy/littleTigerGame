import Sprite   from '../base/sprite'
import DataBus  from '../databus'

const BULLET_IMG_SRC = 'images/zhuti.png'
const BULLET_WIDTH   = 20
const BULLET_HEIGHT  = 40

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

export default class Bullet extends Sprite {
  constructor() {
    super(BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT)
  }

  init(x, y, speed,jiaodu) {
    this.x = x
    this.y = y

    this[__.speed] = speed

    this.visible = true
  }

  // 每一帧更新子弹位置
  update(jiaodu) {
    this.y -= this[__.speed]
    if(jiaodu == 1){
      this.x -= this[__.speed] / 2
    }
    // this.x -= this[__.speed]/2
    // 超出屏幕外回收自身
    // console.log(this.height)
    if ( this.y < -this.height )
      databus.removeBullets(this)
  }
}
