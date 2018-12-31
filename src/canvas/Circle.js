export default class Circle {
  constructor(x, y, count, ww) {
    this.x = x
    this.y = y
    this.width = this.height = (ww / count) * .75
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
}
