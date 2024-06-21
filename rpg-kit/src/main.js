import { GameLoop } from './GameLoop'
import { DOWN, Input, LEFT, RIGHT, UP } from './Input'
import { resources } from './Resources'
import { Sprite } from './Sprite'
import { Vector2 } from './Vector2'
import './style.css'
import { gridCells, isSpaceFree } from './utils/grid'
import { moveTowards } from './utils/moveTowards'
import { walls } from './levels/level1'
import { Animations } from './Animations'
import { FrameIndexPattern } from './FrameIndexPattern.js'
import {
  PICK_UP_DOWN,
  STAND_DOWN,
  STAND_LEFT,
  STAND_RIGHT,
  STAND_UP,
  WALK_DOWN,
  WALK_LEFT,
  WALK_RIGHT,
  WALK_UP,
} from './objects/Hero/heroAnimations.js'

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
  animations: new Animations({
    walkDown: new FrameIndexPattern(WALK_DOWN),
    walkUp: new FrameIndexPattern(WALK_UP),
    walkLeft: new FrameIndexPattern(WALK_LEFT),
    walkRight: new FrameIndexPattern(WALK_RIGHT),
    standDown: new FrameIndexPattern(STAND_DOWN),
    standUp: new FrameIndexPattern(STAND_UP),
    standLeft: new FrameIndexPattern(STAND_LEFT),
    standRight: new FrameIndexPattern(STAND_RIGHT),
    pickUpDown: new FrameIndexPattern(PICK_UP_DOWN),
  }),
})

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
})

const heroDesinationPosition = hero.position.duplicate()

let heroFacing = DOWN

const update = (delta) => {
  const distance = moveTowards(hero, heroDesinationPosition, 1)
  const hasArrived = distance <= 1

  if (hasArrived) tryMove()

  // Hero animations
  hero.step(delta)
}

const input = new Input()
const tryMove = () => {
  if (!input.direction) {
    if (heroFacing === LEFT) {
      hero.animations.play('standLeft')
    }
    if (heroFacing === RIGHT) {
      hero.animations.play('standRight')
    }
    if (heroFacing === UP) {
      hero.animations.play('standUp')
    }
    if (heroFacing === DOWN) {
      hero.animations.play('standDown')
    }

    return
  }

  let nextX = heroDesinationPosition.x
  let nextY = heroDesinationPosition.y

  const GRID_SIZE = 16

  switch (input.direction) {
    case DOWN:
      nextY += GRID_SIZE
      hero.animations.play('walkDown')
      break
    case UP:
      nextY -= GRID_SIZE
      hero.animations.play('walkUp')
      break
    case LEFT:
      nextX -= GRID_SIZE
      hero.animations.play('walkLeft')
      break
    case RIGHT:
      nextX += GRID_SIZE
      hero.animations.play('walkRight')
      break
    default:
      break
  }

  heroFacing = input.direction ?? heroFacing

  // * Validate the next desination is a legal move
  if (isSpaceFree(walls, nextX, nextY)) {
    heroDesinationPosition.x = nextX
    heroDesinationPosition.y = nextY
  }
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
