export const walls = new Set()

walls.add(`64,48`) // * tree

walls.add(`128,48`) // * two squares
walls.add(`144,48`)

walls.add(`64,64`) // * four squares
walls.add(`64,80`)
walls.add(`80,64`)
walls.add(`80,80`)

walls.add(`112,80`) // * water
walls.add(`128,80`)
walls.add(`144,80`)
walls.add(`160,80`)

walls.add(`192,96`) // * rocks
walls.add(`208,96`)
walls.add(`224,96`)

walls.add(`208,64`) // * tree
walls.add(`224,64`) // * cabin

walls.add(`224,32`) // * tree
