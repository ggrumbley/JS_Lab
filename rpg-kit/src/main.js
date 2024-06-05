import { GameLoop } from './GameLoop'
import { DOWN, Input, LEFT, RIGHT, UP } from './Input'
import { resources } from './Resources'
import { Sprite } from './Sprite'
import { Vector2 } from './Vector2'
import './style.css'
import { gridCells } from './utils/grid'
import { moveTowards } from './utils/moveTowards'

const canvas = document.querySelector('#game-canvas')
const ctx = canvas.getContext('2d')

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
})

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
})

const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1,
  position: new Vector2(gridCells(6), gridCells(5)),
})

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
})

const heroDesinationPosition = hero.position.duplicate()

const update = () => {
  const distance = moveTowards(hero, heroDesinationPosition, 1)
  const hasArrived = distance <= 1

  if (hasArrived) tryMove()
}

const input = new Input()
const tryMove = () => {
  if (!input.direction) return

  let nextX = heroDesinationPosition.x
  let nextY = heroDesinationPosition.y

  const GRID_SIZE = 16

  switch (input.direction) {
    case DOWN:
      nextY += GRID_SIZE
      hero.frame = 0
      break
    case UP:
      nextY -= GRID_SIZE
      hero.frame = 6
      break
    case LEFT:
      nextX -= GRID_SIZE
      hero.frame = 9
      break
    case RIGHT:
      nextX += GRID_SIZE
      hero.frame = 3
      break
    default:
      break
  }

  heroDesinationPosition.x = nextX
  heroDesinationPosition.y = nextY
}

const draw = () => {
  skySprite.drawImage(ctx, 0, 0)
  groundSprite.drawImage(ctx, 0, 0)

  // * Center Hero in the cell
  const heroOffset = new Vector2(-8, -21)
  const heroPosX = hero.position.x + heroOffset.x
  const heroPosY = hero.position.y + heroOffset.y

  shadow.drawImage(ctx, heroPosX, heroPosY)
  hero.drawImage(ctx, heroPosX, heroPosY)
}

const gameLoop = new GameLoop(update, draw)
gameLoop.start()
