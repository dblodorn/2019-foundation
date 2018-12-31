import { store } from './../state/store'
import { randomNumMinMax } from './../scripts'
import Circle from './Circle'

export default () => {
  class Canvas {
    constructor() {
      this.canvas = document.getElementById('canvas')
      this.ctx = canvas.getContext('2d')
      this.window = store.getState().resizeState
      this.canvas.width = this.window.window_width
      this.canvas.height = this.window.window_height
      this.circle_count = 10
      this.tick = 0

      this.state = {
        ww: this.window.window_width,
        wh: this.window.window_height,
        circles: []
      }

      this.updateState = this.updateState.bind(this)
      this.update = this.update.bind(this)
      this.drawCircles = this.drawCircles.bind(this)
      
      this.init()
    }

    updateState() {
      this.resize_state = store.getState().resizeState
      this.state.ww = store.getState().resizeState.window_width
      this.state.wh = store.getState().resizeState.window_height
    }

    drawCircles() {
      let i
      this.state.circles = []
      for (i = 0; i < this.circle_count; i++) {
        this.state.circles.push(
          new Circle(
            randomNumMinMax(0, this.state.ww),
            randomNumMinMax(0, this.state.wh),
            this.circle_count,
            this.state.ww
          )
        )
      }
      this.state.circles.forEach((circle) => {
        circle.draw(this.ctx)
      })
    }

    init() {
      this.update()
      this.drawCircles()
    }

    update() {
      this.updateState()
      requestAnimationFrame(() => {
        this.update()
      })
    }
  }

  new Canvas()
}