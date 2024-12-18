namespace SpriteKind {
    export const Inventory = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0) {
        if (!(Inv.indexOf(0) == -1)) {
            if (Inv[B] == 3 && !(tiles.tileAtLocationIsWall(tiles.getTileLocation(Plr.tilemapLocation().column, Plr.tilemapLocation().row + 1)))) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Water`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
                Inv[B] = 2
                RenderInv()
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Water`) && B == Inv.indexOf(2)) {
                Inv[B] = 3
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Mud`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                RenderInv()
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Stone`)) {
                if (Inv[B] - 1 == 7 || Inv[B] == 8) {
                    tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                    tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                    info.changeScoreBy(1)
                    AddInv(4)
                } else {
                    tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`StoneBreak`)
                }
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`StoneBreak`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                AddInv(4)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Diamond`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                AddInv(5)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`TNT`)) {
                AddInv(6)
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 2, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 2, Plr.tilemapLocation().row), false)
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row + 1), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row + 1), false)
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row - 1), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row - 1), false)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Rock`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Rockbreak`)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Rockbreak`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                AddInv(1)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Tree`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`TreeBreak`)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`TreeBreak`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                AddInv(9)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Chest`)) {
                if (randint(1, 2) == 1) {
                    AddInv(1)
                } else {
                    AddInv(2)
                }
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`BucketTile`)) {
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                AddInv(2)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`Treetile`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                AddInv(9)
            } else if (Plr.tileKindAt(TileDirection.Right, assets.tile`BucketTile2`)) {
                tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Grass`)
                tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), false)
                AddInv(3)
            }
        } else {
            Plr.sayText("Inventory full.", 1000, false)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.A.isPressed())) {
        if (A == 0 && !(tiles.tileAtLocationIsWall(tiles.getTileLocation(Plr.tilemapLocation().column, Plr.tilemapLocation().row - 1)))) {
            for (let index = 0; index < 4; index++) {
                Plr.y += -4
                Inv1.y += -4
                Inv2.y += -4
                Inv3.y += -4
                InvCraft.y += -4
                Selector.y += -4
                UIFrame.y += -4
                pause(30)
            }
        }
    } else {
        if (B != -1) {
            Selector.y += -14.5
            B += -1
            if (Inv[B] == 1) {
                Selector.sayText("Rock", 500, false)
            } else if (Inv[B] == 2) {
                Selector.sayText("Bucket", 500, false)
            } else if (Inv[B] == 3) {
                Selector.sayText("Bucket", 500, false)
            } else if (Inv[B] == 4) {
                Selector.sayText("Stone", 500, false)
            } else if (Inv[B] == 5) {
                Selector.sayText("Diamond", 500, false)
            } else if (Inv[B] == 6) {
                Selector.sayText("TNT", 500, false)
            } else if (Inv[B] == 7) {
                Selector.sayText("W. Pick", 500, false)
            } else if (Inv[B] == 8) {
                Selector.sayText("ST. Pick")
            } else if (Inv[B] == 9) {
                Selector.sayText("Wood", 500, false)
            } else if (Inv[B] == 10) {
                Selector.sayText("Meat", 500, false)
            }
        } else {
            B = 2
            Selector.y += 43.41
        }
    }
})
function HelpMenuFunc () {
    HelpMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Back", assets.image`BackIcon`),
    miniMenu.createMenuItem("Gamemodes", assets.image`Gamemodeicon`),
    miniMenu.createMenuItem("Changelogs", assets.image`NotesIcon`)
    )
    HelpMenu.x = 83
    HelpMenu.setDimensions(100, 110)
    HelpMenu.setTitle("Help")
    HelpMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            HelpMenu.close()
            Mainmenu()
        } else if (selectedIndex == 1) {
            HelpMenu.close()
            GamemodesHelp = miniMenu.createMenu(
            miniMenu.createMenuItem("Back", assets.image`BackIcon`),
            miniMenu.createMenuItem("Survival: Limited resources"),
            miniMenu.createMenuItem("And health"),
            miniMenu.createMenuItem("Creative: Unlimited resources"),
            miniMenu.createMenuItem("And health.")
            )
            GamemodesHelp.x = 128
            GamemodesHelp.setDimensions(100, 110)
            GamemodesHelp.setTitle("Help > Gamemodes")
            GamemodesHelp.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    GamemodesHelp.close()
                    HelpMenuFunc()
                }
            })
        } else if (selectedIndex == 2) {
            HelpMenu.close()
            Changelogs = miniMenu.createMenuFromArray([
            miniMenu.createMenuItem("Back", assets.image`BackIcon`),
            miniMenu.createMenuItem("1.0<><><><><><>", assets.image`1_0relIcon`),
            miniMenu.createMenuItem("Fixed all bugs from PreRel"),
            miniMenu.createMenuItem("Added chests"),
            miniMenu.createMenuItem("Buckets and pause menu"),
            miniMenu.createMenuItem("Revamped UI. Made world"),
            miniMenu.createMenuItem("Not restricted to camera"),
            miniMenu.createMenuItem("Etc"),
            miniMenu.createMenuItem("1.1<><><><><>", assets.image`1_1RelIcon`),
            miniMenu.createMenuItem("Fixed UI bugs"),
            miniMenu.createMenuItem("Added main menu"),
            miniMenu.createMenuItem("Revamped pause menu"),
            miniMenu.createMenuItem("Changed keybinds"),
            miniMenu.createMenuItem("Etc"),
            miniMenu.createMenuItem("Full is on github page")
            ])
            Changelogs.x = 105
            Changelogs.y = 92
            Changelogs.setDimensions(140, 120)
            Changelogs.setTitle("Help > Changelogs")
            Changelogs.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    Changelogs.close()
                    HelpMenuFunc()
                }
            })
        }
    })
    scene.centerCameraAt(95, 60)
}
function Hunger (Val: number) {
    info.setScore(Val)
    pause(100)
    Craftmenu()
    Craft_menu.close()
    A = 0
    while (A == 0) {
        pause(12000)
        info.changeScoreBy(-1)
        if (info.score() == 0) {
            game.gameOver(false)
        }
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0) {
        if (B == -1) {
            Craftmenu()
            A = 1
        } else {
            A = 1
            PauseMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Resume", assets.image`PlayIcon0`),
            miniMenu.createMenuItem("Chat", assets.image`ChatIcon`),
            miniMenu.createMenuItem("Main menu", assets.image`BackIcon`),
            miniMenu.createMenuItem("Reset", assets.image`ResetIcon`),
            miniMenu.createMenuItem("Fix selector", assets.image`FixSelIcon`)
            )
            PauseMenu.setPosition(Plr.x - 8, Plr.y)
            PauseMenu.setDimensions(100, 110)
            PauseMenu.setTitle("Paused")
            PauseMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    PauseMenu.close()
                    scene.setBackgroundColor(9)
                    A = 0
                    scene.cameraFollowSprite(Plr)
                } else if (selectedIndex == 1) {
                    A = 0
                    PauseMenu.close()
                    scene.cameraFollowSprite(Plr)
                    Msg = game.askForString("/Chat/ use !help for commands.", 24)
                    if (Msg == "!help" || Msg == "!commands" || Msg == "!cmds") {
                        Msg = game.askForString("Commands: !give || !g [Rock,Stone,TNT,etc]", 24)
                    } else if (Msg == "!give rock" || Msg == "!g rock") {
                        AddInv(1)
                    } else if (Msg == "!give empty bucket" || Msg == "!g empty bucket") {
                        AddInv(2)
                    } else if (Msg == "!give bucket" || Msg == "!g bucket") {
                        AddInv(3)
                    } else if (Msg == "!give stone" || Msg == "!g stone") {
                        AddInv(4)
                    } else if (Msg == "!give diamond" || Msg == "!g diamond") {
                        AddInv(5)
                    } else if (Msg == "!give tnt" || Msg == "!g tnt" || Msg == "!g TNT") {
                        AddInv(6)
                    } else if (Msg == "!give Wooden pickaxe" || Msg == "!g wooden pickaxe") {
                        AddInv(7)
                    } else if (Msg == "!give Stone pickaxe" || Msg == "!g stone pickaxe") {
                        AddInv(8)
                    } else if (Msg == "!give Wood" || Msg == "!g stone wood") {
                        AddInv(9)
                    } else if (Msg == "!give meat" || Msg == "!g meat") {
                        AddInv(10)
                    }
                    RenderInv()
                    Plr.sayText(Msg, 2000, false)
                } else if (selectedIndex == 2) {
                    PauseMenu.close()
                    Mainmenu()
                } else if (selectedIndex == 3) {
                    game.reset()
                } else if (selectedIndex == 4) {
                    B = 0
                    A = 0
                    Selector.y = Inv1.y
                    PauseMenu.close()
                }
            })
        }
    }
})
function RenderInv () {
    if (Inv[0] == 0) {
        Inv1.setImage(assets.image`InvNone`)
    } else if (Inv[0] == 1) {
        Inv1.setImage(assets.image`InvRock`)
    } else if (Inv[0] == 2) {
        Inv1.setImage(assets.image`InvBucket`)
    } else if (Inv[0] == 3) {
        Inv1.setImage(assets.image`InvBucketFull`)
    } else if (Inv[0] == 4) {
        Inv1.setImage(assets.image`InvStone`)
    } else if (Inv[0] == 5) {
        Inv1.setImage(assets.image`InvDiamond`)
    } else if (Inv[0] == 6) {
        Inv1.setImage(assets.image`InvTNT`)
    } else if (Inv[0] == 7) {
        Inv1.setImage(assets.image`InvWPick`)
    } else if (Inv[0] == 8) {
        Inv1.setImage(assets.image`InvSPick`)
    } else if (Inv[0] == 9) {
        Inv1.setImage(assets.image`InvWood`)
    } else if (Inv[0] == 10) {
        Inv1.setImage(assets.image`Flesh`)
    }
    if (Inv[1] == 0) {
        Inv2.setImage(assets.image`InvNone`)
    } else if (Inv[1] == 1) {
        Inv2.setImage(assets.image`InvRock`)
    } else if (Inv[1] == 2) {
        Inv2.setImage(assets.image`InvBucket`)
    } else if (Inv[1] == 3) {
        Inv2.setImage(assets.image`InvBucketFull`)
    } else if (Inv[1] == 4) {
        Inv2.setImage(assets.image`InvStone`)
    } else if (Inv[1] == 5) {
        Inv2.setImage(assets.image`InvDiamond`)
    } else if (Inv[1] == 6) {
        Inv2.setImage(assets.image`InvTNT`)
    } else if (Inv[1] == 7) {
        Inv2.setImage(assets.image`InvWPick`)
    } else if (Inv[1] == 8) {
        Inv2.setImage(assets.image`InvSPick`)
    } else if (Inv[1] == 9) {
        Inv2.setImage(assets.image`InvWood`)
    } else if (Inv[1] == 10) {
        Inv2.setImage(assets.image`Flesh`)
    }
    if (Inv[2] == 0) {
        Inv3.setImage(assets.image`InvNone`)
    } else if (Inv[2] == 1) {
        Inv3.setImage(assets.image`InvRock`)
    } else if (Inv[2] == 2) {
        Inv3.setImage(assets.image`InvBucket`)
    } else if (Inv[2] == 3) {
        Inv3.setImage(assets.image`InvBucketFull`)
    } else if (Inv[2] == 4) {
        Inv3.setImage(assets.image`InvStone`)
    } else if (Inv[2] == 5) {
        Inv3.setImage(assets.image`InvDiamond`)
    } else if (Inv[2] == 6) {
        Inv3.setImage(assets.image`InvTNT`)
    } else if (Inv[2] == 7) {
        Inv3.setImage(assets.image`InvWPick`)
    } else if (Inv[2] == 8) {
        Inv3.setImage(assets.image`InvSPick`)
    } else if (Inv[2] == 9) {
        Inv3.setImage(assets.image`InvWood`)
    } else if (Inv[2] == 10) {
        Inv3.setImage(assets.image`Flesh`)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0 && !(tiles.tileAtLocationIsWall(tiles.getTileLocation(Plr.tilemapLocation().column - 1, Plr.tilemapLocation().row)))) {
        for (let index = 0; index < 4; index++) {
            Plr.x += -4
            Inv1.x += -4
            Inv2.x += -4
            Inv3.x += -4
            InvCraft.x += -4
            Selector.x += -4
            UIFrame.x += -4
            pause(30)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0 && !(tiles.tileAtLocationIsWall(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row)))) {
        for (let index = 0; index < 4; index++) {
            Plr.x += 4
            Inv1.x += 4
            Inv2.x += 4
            Inv3.x += 4
            InvCraft.x += 4
            Selector.x += 4
            UIFrame.x += 4
            pause(30)
        }
    }
})
function Mainmenu () {
    A = 1
    if (C == 1) {
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`Void`)
        Inv1.scale = 0
        Inv2.scale = 0
        Inv3.scale = 0
        Selector.scale = 0
        InvCraft.scale = 0
        UIFrame.scale = 0
    }
    Main_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("Singleplayer", assets.image`PlayIcon`),
    miniMenu.createMenuItem("Multiplayer", assets.image`MultiplayIcon`),
    miniMenu.createMenuItem("Options", assets.image`OptionsIcon`),
    miniMenu.createMenuItem("Information", assets.image`Questionicon`)
    )
    Main_menu.x = 90
    Main_menu.setDimensions(100, 110)
    Main_menu.setTitle("Main menu")
    scene.centerCameraAt(95, 60)
    Main_menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            game.splash("A button doesn't work until 1 min after spawning idk why")
            if (C == 0) {
                Plr = sprites.create(assets.image`Player`, SpriteKind.Player)
                Inv1 = sprites.create(assets.image`InvNone`, SpriteKind.Inventory)
                Inv2 = sprites.create(assets.image`InvNone`, SpriteKind.Inventory)
                Inv3 = sprites.create(assets.image`InvNone`, SpriteKind.Inventory)
                InvCraft = sprites.create(assets.image`InvCraft`, SpriteKind.Inventory)
                UIFrame = sprites.create(assets.image`UIFrame`, SpriteKind.Inventory)
                Selector = sprites.create(assets.image`Select`, SpriteKind.Inventory)
                Inv = [0, 0, 0]
                Inv1.setPosition(51, 92)
                Inv2.setPosition(51, 108)
                Inv3.setPosition(51, 124)
                InvCraft.setPosition(51, 78)
                Selector.setPosition(67, 78)
                UIFrame.setPosition(124, 140)
                UIFrame.sx = 10
                scene.setBackgroundColor(9)
                tiles.setCurrentTilemap(tilemap`World`)
                Plr.scale = 1
                Plr.setPosition(122, 88)
                scene.cameraFollowSprite(Plr)
                info.setScore(0)
                C = 1
                Main_menu.close()
                A = 0
                UIFrame.setFlag(SpriteFlag.GhostThroughWalls, true)
                UIFrame.setFlag(SpriteFlag.GhostThroughSprites, true)
                Inv1.setFlag(SpriteFlag.GhostThroughWalls, true)
                Inv1.setFlag(SpriteFlag.GhostThroughSprites, true)
                Inv2.setFlag(SpriteFlag.GhostThroughWalls, true)
                Inv2.setFlag(SpriteFlag.GhostThroughSprites, true)
                Inv3.setFlag(SpriteFlag.GhostThroughWalls, true)
                Inv3.setFlag(SpriteFlag.GhostThroughSprites, true)
                InvCraft.setFlag(SpriteFlag.GhostThroughWalls, true)
                InvCraft.setFlag(SpriteFlag.GhostThroughSprites, true)
                Selector.setFlag(SpriteFlag.GhostThroughWalls, true)
                Selector.setFlag(SpriteFlag.GhostThroughSprites, true)
                Selector.setFlag(SpriteFlag.GhostThroughTiles, true)
                UIFrame.setStayInScreen(true)
                Inv1.setStayInScreen(true)
                Inv2.setStayInScreen(true)
                Inv3.setStayInScreen(true)
            } else {
                Inv1.scale = 1
                Inv2.scale = 1
                Inv3.scale = 1
                InvCraft.scale = 1
                UIFrame.scale = 1
                UIFrame.sx = 10
                scene.setBackgroundColor(9)
                tiles.setCurrentTilemap(tilemap`World`)
                scene.cameraFollowSprite(Plr)
                Main_menu.close()
                A = 0
            }
            if (Gamemode == 0) {
                info.setLife(10)
                Hunger(10)
            } else {
                info.setLife(999999)
            }
        } else if (selectedIndex == 2) {
            Main_menu.close()
            Options = miniMenu.createMenu(
            miniMenu.createMenuItem("Back", assets.image`BackIcon`),
            miniMenu.createMenuItem("GameMode", assets.image`Gamemodeicon`)
            )
            Options.x = 78
            Options.setDimensions(100, 110)
            Options.setTitle("Options")
            Options.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    Options.close()
                    Mainmenu()
                } else if (selectedIndex == 1) {
                    if (Gamemode == 0) {
                        Gamemode = 1
                        Options.setTitle("Creative")
                        pause(900)
                        Options.setTitle("Options")
                    } else if (Gamemode == 1) {
                        Gamemode = 0
                        Options.setTitle("Survival")
                        pause(900)
                        Options.setTitle("Options")
                    }
                }
            })
            scene.centerCameraAt(95, 60)
        } else if (selectedIndex == 3) {
            Main_menu.close()
            HelpMenuFunc()
        }
    })
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0 && !(tiles.tileAtLocationIsWall(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row)))) {
        if (Inv[B] == 10) {
            Inv[B] = 0
            info.changeScoreBy(10)
        }
        if (Inv[B] == 2) {
            Inv[B] = 0
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`BucketTile`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
        } else if (Inv[B] == 4) {
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Stone`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
            Inv[B] = 0
        } else if (Inv[B] == 5) {
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Diamond`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
            Inv[B] = 0
        } else if (Inv[B] == 6) {
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`TNT`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
            Inv[B] = 0
        } else if (Inv[B] == 1) {
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Rock`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
            Inv[B] = 0
        } else if (Inv[B] == 9) {
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`Treetile`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
            Inv[B] = 0
        } else if (Inv[B] == 3) {
            Inv[B] = 0
            tiles.setTileAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), assets.tile`BucketTile2`)
            tiles.setWallAt(tiles.getTileLocation(Plr.tilemapLocation().column + 1, Plr.tilemapLocation().row), true)
        }
        RenderInv()
    }
})
function AddInv (Num: number) {
    if (Inv.indexOf(0) == -1) {
        Plr.sayText("Inventory full.", 1250, false)
    } else {
        if (Num == 1) {
            Plr.sayText("Rock", 1250, false)
        } else if (Num == 2) {
            Plr.sayText("Bucket", 1250, false)
        } else if (Num == 3) {
            Plr.sayText("Filled bucket", 1250, false)
        } else if (Num == 4) {
            Plr.sayText("Stone", 1250, false)
        } else if (Num == 5) {
            Plr.sayText("Diamond", 1250, false)
        } else if (Num == 6) {
            Plr.sayText("TNT", 1250, false)
        } else if (Num == 7) {
            Plr.sayText("Wooden pick", 1250, false)
        } else if (Num == 8) {
            Plr.sayText("Stone pick", 1250, false)
        } else if (Num == 9) {
            Plr.sayText("Wood", 1250, false)
        } else if (Num == 10) {
            Plr.sayText("Flesh", 1250, false)
        }
        Inv[Inv.indexOf(0)] = Num
        RenderInv()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.A.isPressed())) {
        if (A == 0 && !(tiles.tileAtLocationIsWall(tiles.getTileLocation(Plr.tilemapLocation().column, Plr.tilemapLocation().row + 1)))) {
            for (let index = 0; index < 4; index++) {
                Plr.y += 4
                Inv1.y += 4
                Inv2.y += 4
                Inv3.y += 4
                InvCraft.y += 4
                Selector.y += 4
                UIFrame.y += 4
                pause(30)
            }
        }
    } else {
        if (B != 2) {
            Selector.y += 14.5
            B += 1
            if (Inv[B] == 1) {
                Selector.sayText("Rock", 500, false)
            } else if (Inv[B] == 2) {
                Selector.sayText("Bucket", 500, false)
            } else if (Inv[B] == 3) {
                Selector.sayText("Bucket", 500, false)
            } else if (Inv[B] == 4) {
                Selector.sayText("Stone", 500, false)
            } else if (Inv[B] == 5) {
                Selector.sayText("Diamond", 500, false)
            } else if (Inv[B] == 6) {
                Selector.sayText("TNT", 500, false)
            } else if (Inv[B] == 7) {
                Selector.sayText("W. Pick", 500, false)
            } else if (Inv[B] == 8) {
                Selector.sayText("ST. Pick")
            } else if (Inv[B] == 9) {
                Selector.sayText("Wood", 500, false)
            } else if (Inv[B] == 10) {
                Selector.sayText("Meat", 500, false)
            }
        } else {
            B = -1
            Selector.y += -43.41
        }
    }
})
function Craftmenu () {
    Craft_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("Back", assets.image`BackIcon`),
    miniMenu.createMenuItem("3 Wood", assets.image`WPickIcon`),
    miniMenu.createMenuItem("2 Wood+1 Stone", assets.image`SPickIcon`)
    )
    Craft_menu.setDimensions(100, 110)
    Craft_menu.setTitle("Crafting")
    Craft_menu.setPosition(Plr.x, Plr.y)
    Craft_menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            Craft_menu.close()
            A = 0
        } else if (selectedIndex == 1) {
            if (Inv[0] == 9 && (Inv[1] == 9 && Inv[2] == 9)) {
                Inv[1] = 0
                Inv[2] = 0
                Inv[0] = 7
                RenderInv()
            } else {
                Craft_menu.setTitle("Can't craft that")
                pause(500)
                Craft_menu.setTitle("Crafting")
            }
        } else if (selectedIndex == 2) {
            if ((Inv[2] == 4 || (Inv[0] == 4 || Inv[1] == 4)) && (Inv[1] == 9 && Inv[2] == 9 || Inv[0] == 9 && Inv[1] == 9)) {
                Inv[1] = 0
                Inv[2] = 0
                Inv[0] = 8
                RenderInv()
            } else {
                Craft_menu.setTitle("Can't craft that")
                pause(500)
                Craft_menu.setTitle("Crafting")
            }
        }
    })
}
let Options: miniMenu.MenuSprite = null
let Gamemode = 0
let Main_menu: miniMenu.MenuSprite = null
let Msg = ""
let PauseMenu: miniMenu.MenuSprite = null
let Craft_menu: miniMenu.MenuSprite = null
let Changelogs: miniMenu.MenuSprite = null
let GamemodesHelp: miniMenu.MenuSprite = null
let HelpMenu: miniMenu.MenuSprite = null
let UIFrame: Sprite = null
let Selector: Sprite = null
let InvCraft: Sprite = null
let Inv3: Sprite = null
let Inv2: Sprite = null
let Inv1: Sprite = null
let Inv: number[] = []
let Plr: Sprite = null
let C = 0
let B = 0
let A = 0
A = 1
B = -1
C = 0
Plr = sprites.create(assets.image`Void`, SpriteKind.Player)
Inv = [0, 0, 0]
Mainmenu()
