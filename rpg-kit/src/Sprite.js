import { Vector2 } from './Vector2'

export class Sprite {
  constructor({
    resource, // * image we want to draw
    frameSize = new Vector2(16, 16), // * size of the crop of the image
    hFrames = 1, // * how the sprite arranged horizontally
    vFrames = 1, // * how the sprite arranged vertically
    frame = 0, // * which frame we want to show
    scale = 1, // * how large to draw this image
    position = new Vector2(0, 0), // * where to draw it (top left corner)
    animations = null,
  }) {
    this.resource = resource
    this.frameSize = frameSize
    this.hFrames = hFrames
    this.vFrames = vFrames
    this.frame = frame
    this.frameMap = new Map()
    this.scale = scale
    this.position = position
    this.animations = animations

    // * Build frameMap on Class init
    this.buildFrameMap()
  }

  buildFrameMap() {
    let frameCount = 0

    // * Vertical position loop
    for (let v = 0; v < this.vFrames; v++) {
      //  * Horizontal position loop
      for (let h = 0; h < this.hFrames; h++) {
        const hFrameSizeOffset = this.frameSize.x * h
        const vFrameSizeOffset = this.frameSize.y * v

        this.frameMap.set(frameCount, new Vector2(hFrameSizeOffset, vFrameSizeOffset))
        frameCount++
      }
    }
  }

  step(delta) {
    if (!this.animations) return

    this.animations.step(delta)
    this.frame = this.animations.frame
  }

  drawImage(ctx, x, y) {
    if (!this.resource.isLoaded) return

    // * Find the correct sprite sheet frame to use
    let frameCoordX = 0
    let frameCoordY = 0
    const frame = this.frameMap.get(this.frame)
    if (frame) {
      frameCoordX = frame.x
      frameCoordY = frame.y
    }

    const frameSizeX = this.frameSize.x
    const frameSizeY = this.frameSize.y

    ctx.drawImage(
      this.resource.image,
      frameCoordX,
      frameCoordY, // * Top Y corner of frame
      frameSizeX, // * How much to crop from the sprite sheet (X)
      frameSizeY, // * How much to crop from the sprite sheet (Y)
      x, // * Where to place this on canvas tag X (0)
      y, // * Where to place this on canvas tag Y (0)
      frameSizeX * this.scale, // * How large to scale it (X)
      frameSizeY * this.scale, // * How large to scale it (Y)
    )
  }
}
