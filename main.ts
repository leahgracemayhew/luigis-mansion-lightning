scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505080808080808080809090808080808080c0c0c0c0c0c0c0c09090d0d0d0d0d0d0909090909090909090909090909090909090909090909090909090909090909050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.builtin.oceanDepths9,sprites.builtin.oceanDepths8,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010205010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.tile0,sprites.castle.tileGrass3,myTiles.tile1,sprites.builtin.brick,sprites.castle.saplingOak,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tiles.createTilemap(hex`100010000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e0b130a1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d1e1e1e1e1e1e1e1e1e1e1e1e1e1e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.tile0,myTiles.tile1,sprites.dungeon.chestClosed,sprites.builtin.brick,sprites.castle.rock2,sprites.castle.saplingOak,sprites.castle.tileGrass1,sprites.castle.rock1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.castle.tilePath8,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tileGrass3,myTiles.tile9,myTiles.tile10,myTiles.tile11,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths8,sprites.builtin.coral0,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.castle.rock0,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.tilePath2,sprites.castle.tileGrass2,myTiles.tile12,sprites.dungeon.darkGroundCenter,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
    }
})
let mySprite = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 
    7 4 7 7 7 4 4 7 7 7 7 7 7 7 7 7 
    7 4 4 7 7 4 4 4 4 4 7 7 7 7 7 7 
    7 7 4 7 7 4 1 f 4 4 7 7 7 7 7 7 
    4 4 4 7 7 4 1 f 4 4 7 7 7 7 7 7 
    4 7 7 7 7 4 4 4 4 4 7 7 7 7 7 7 
    4 4 7 7 7 7 7 a a 7 7 7 7 7 7 7 
    7 4 e 4 e 4 e 4 4 7 7 7 7 7 7 7 
    7 7 4 4 4 4 4 4 4 7 7 7 7 7 7 7 
    7 7 4 7 4 7 4 7 4 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`10001000080d0713010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010c05010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010113070d08`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.castle.tileGrass3,myTiles.tile1,sprites.builtin.brick,sprites.castle.saplingOak,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.castle.tileGrass1,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
music.playMelody("C D E F G A B C5 ", 500)
controller.moveSprite(mySprite)
forever(function () {
    music.playMelody("G A B C5 B A G F ", 500)
    music.playMelody("C5 B A G F E D C ", 500)
})
