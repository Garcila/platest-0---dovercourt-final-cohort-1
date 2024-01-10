// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`24000800000004000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000002010103000000000000000000000000000000000000000000000000040000000000000000000000000004000000000004000000000000000000000000000002010101010101030000000000020101030002010101010103000000000000000400000000000000000000000000000400000000000000000000000000000000000002010101030000000000000000020101010101030000000000000000000000000201030000000000000000000000040000000000000000000000000000000000000000050505050505050505050505050505010101010505050505050505050505050505050505`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 . 2 2 . . . . . 2 2 2 2 . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.skillmap.islandTile7,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.hazardWater], TileScale.Sixteen);
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
