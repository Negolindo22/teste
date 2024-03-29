// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`140014000408080808080808080808080808080909090906010b0b0b0b0b0a0f0a0a0a0a0a0a0a0a0a0a1005010b0a0a0a0b0c0a0c0c0c0a0c0a0a0a0a0c0a05010c0c0c0a0a0c0c0c0a0c0c0c0c0a0c0a0c0a05010a0f0c0a0c0c0a0a0a0a0a0a0c0a0c0a0c0a05010a0c0c0a0c0a0a0c0c0a0a0c0a0a0c0a0a0a05010a0a0a0a0a0a0c0a0a0a0c0c0a0a0a0c0a0a05010a0a0c0a0c0c0a0c0c0a0c0c0a0c0c0a0c0a05010a0c0c0c0c0a0a0a0c0a0a0a0c0a0a0a0c0a05010a0c0a0a0a0a0c0a0c0a0a0a0a0a0c0c0c0a05010a0a0c0c0a0a0c0a0a0c0c0a0c0c0c0a0c0a05010a0a100c0a0a0c0a0c0c0c0a0c0c0a0a0a0a05010a0c0c0c0a0c0a0a0a0a0a0a0a0a0c0a0a0a05010a0c0a0a0a0c0a0c0a0c0a0a0a0a0a0a0c0a05010a0c0c0c0a0a0c0a0c0c0c0a0a0c0c0a0c0a05010a0a0a0c0a0a0a0a0a0c0c0a0c0c0a0a0c0a05010e0e0a0a0c0a0a0a0c0c0a0a0c0a0c0a0c0a05010d0e0c0c0c0a0c0c0c110c0c0c0a0c0c0a0a05010d0e0a0a0a0a0a0c0a0a0a0a0a0a0a0a0a0f050207070707070707070707070707070707070703`, img`
22222222222222222222
2.....2............2
2.....2.222.2..222.2
2.2222222.2222.2.2.2
2..2.22......2.2.2.2
2.22.2..22..2..2...2
2.2....2...22...2..2
2..2.22.22.22.22.2.2
2.2222...2...2...2.2
2.2....2.2.....222.2
2..22..2..22.222.2.2
2...2..2.222.22....2
2.222.2........2...2
2.2...2.2.2......2.2
2.222..2.222..22.2.2
2...2.....22.22..2.2
2....2...22..2.2.2.2
2.2222.222.222.22..2
2.......2..........2
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.dungeon.floorDark5,sprites.castle.rock0,sprites.dungeon.hazardLava1,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
