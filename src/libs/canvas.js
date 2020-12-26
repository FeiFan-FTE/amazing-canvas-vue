const WINDOW_SIZE = {
    W: 1920,
    H: 1080
}
const IMAGE_URL = './static/images'
const CARURL ='./static/images/car'
class Fire {
    constructor(HID, origin, aim, window) {
        this.origin = origin
        this.aim = aim
        this.window = window || WINDOW_SIZE
        this.ctx = null
        this.images = new Image()
        this.explosion_speed = 0
        this.htmlID = HID
        this.timer = null
        this.speed = 0.02
    }
    init() {
        let t = this
        t.createHTML()
        t.images.src = `${CARURL}/1.png`
        console.log(t.images.width, t.images.height)
        t.ctx.fillStyle = '#ddd'
        t.ctx.font = '22px Helvetica Neue'
        t.ctx.fillText(t.origin.name, t.origin.x, t.origin.y)

        t.images.onload = function () {
            t.ctx.drawImage(
                t.images,
                0,
                0,
                t.images.width,
                t.images.height,
                t.origin.x,
                t.origin.y,
                t.images.width,
                t.images.height)
        }
        this.explosion_speed += 64

    }
    createHTML() {
        let canvas = document.createElement('canvas');
        canvas.width = this.window.w;
        canvas.height = this.window.h;
        this.ctx = canvas.getContext('2d')
        if (this.htmlID) {
            document.querySelector(this.htmlID).innerHTML = ``
            document.querySelector(this.htmlID).appendChild(canvas)
        } else {
            document.body.appendChild(canvas)
        }
    }
    move() {
        let t = this
        if (!t.timer) {
            t.timer = setInterval(function () {
                t.speed = t.speed + 1
                t.ctx.clearRect(0, 0, t.window.w, t.window.h)
                t.ctx.fillStyle = '#ddd'
                t.ctx.font = '22px Helvetica Neue'
                t.ctx.fillText(t.origin.name, t.origin.x + t.speed, t.origin.y)

                t.ctx.drawImage(
                    t.images,
                    0,
                    0,
                    t.images.width,
                    t.images.height,
                    t.origin.x + t.speed,
                    t.origin.y,
                    t.images.width,
                    t.images.height)
                console.log(t.origin.x + t.speed)

            }, 1000 / 60)
        } else {

        }

    }
    close() {
        clearInterval(this.timer)
        this.timer =null
    }
}

export default Fire