Ponder.registry((event) => {
    event.create("minecraft:stone")
        .scene(
            "kubejs:11",
            "祭坛",
            "kubejs:111",
            (scene,utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection(
                    [4, 1, 4],
                    Direction.down
                )
                scene.world.setBlocks(
                    [4, 1, 4],
                    "minecraft:white_wool",
                    true
                )
                scene.idle(10)

                scene.text(
                    60,
                    "白色羊毛可以染成红色"
                )
                scene.idle(60)
                scene.world.setBlocks(
                    [4, 1, 4],
                    "minecraft:red_wool",
                    true
                )
                scene.idle(20)
                scene.text(
                    60,
                    "红色羊毛可以用来制作祭坛"
                )
                 scene.idle(40)
                scene.world.hideSection(
                    [4, 1, 4],
                    Direction.up
                )
                scene.idle(40)
                const layer1 = [
                    [3, 1, 1],
                    [6, 1, 1],

                    [1, 1, 3],
                    [1, 1, 6],

                    [3, 1, 8],
                    [6, 1, 8],

                    [8, 1, 6],
                    [8, 1, 3]
                ]
                for (let pos of layer1) {
                    scene.world.setBlocks(
                        pos,
                        "minecraft:oak_log",
                        false
                    )

                    scene.idle(2)
                }

                scene.world.setBlocks(
                    [3, 1, 1],
                    "minecraft:red_wool",
                    true
                )

                scene.world.setBlocks(
                    [6, 1, 1],
                    "minecraft:red_wool",
                    true
                )

                for (let pos of layer1) {
                    scene.world.showSection(
                        pos,
                        Direction.down
                    )

                    scene.idle(4)
                }

                scene.idle(20)
                const layer2 = [
                    [3, 2, 1],
                    [6, 2, 1],

                    [1, 2, 3],
                    [1, 2, 6],

                    [3, 2, 8],
                    [6, 2, 8],

                    [8, 2, 6],
                    [8, 2, 3]
                ]

                for (let pos of layer2) {
                    scene.world.setBlocks(
                        pos,
                        "minecraft:oak_log",
                        true
                    )

                    scene.idle(2)
                }

                scene.world.setBlocks(
                    [3, 2, 1],
                    "minecraft:red_wool",
                    true
                )

                scene.world.setBlocks(
                    [6, 2, 1],
                    "minecraft:red_wool",
                    true
                )
                for (let pos of layer2) {
                    scene.world.showSection(
                        pos,
                        Direction.down
                    )

                    scene.idle(4)
                }

                scene.idle(20)
                const layer3 = [
                    [3, 3, 1],
                    [6, 3, 1],

                    [1, 3, 3],
                    [1, 3, 6],

                    [3, 3, 8],
                    [6, 3, 8],

                    [8, 3, 6],
                    [8, 3, 3]
                ]
                for (let pos of layer3) {
                    scene.world.setBlocks(
                        pos,
                        "minecraft:oak_log",
                        true
                    )
                    scene.idle(2)
                }
                scene.world.setBlocks(
                    [3, 3, 1],
                    "minecraft:red_wool",
                    true
                )
                scene.world.setBlocks(
                    [6, 3, 1],
                    "minecraft:red_wool",
                    true
                )
                for (let pos of layer3) {
                    scene.world.showSection(
                        pos,
                        Direction.down
                    )

                    scene.idle(4)
                }
                const layer4 = [
                    [2, 4, 1],
                    [3, 4, 1],
                    [4, 4, 1],
                    [5, 4, 1],
                    [6, 4, 1],
                    [7, 4, 1],
                    [3, 5, 1],
                    [6, 5, 1],
                    [2, 6, 1],
                    [3, 6, 1],
                    [4, 6, 1],
                    [5, 6, 1],
                    [6, 6, 1],
                    [7, 6, 1]
                ]
                for (let pos of layer4) {
                    scene.world.setBlocks(
                        pos,
                        "minecraft:red_wool",
                        true
                    )
                    scene.idle(2)
                }
                for (let pos of layer4) {
                    scene.world.showSection(
                        pos,
                        Direction.down
                    )
                    scene.idle(4)
                }
                scene.idle(20)
                scene.text(
                    80,
                    "祭坛的结构已经搭建好"
                )
                scene.idle(80)
                scene.text(
                    100,
                    "使用博丽御币右键祭坛中心，可以激活祭坛"
                )
                scene.showControls(
                    60,
                    utils.grid.at(5, 4, 1),
                    "down"
                )
                    .rightClick()
                    .withItem("touhou_little_maid:hakurei_gohei")
                scene.idle(100)
                scene.idle(100)
            }
        )
})