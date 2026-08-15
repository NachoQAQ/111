Ponder.registry((event) => {
    event.create('@immersive_melodies')
        .scene(
            "kubejs:lute",
            "乐器演奏",
            "kubejs:111",
            (scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.text(
                    100,
                    "乐器可以被大多数生物拾取并演奏，包括女仆"
                )
                scene.idle(100)
                const zombie = scene.world.createEntity(
                    "minecraft:zombie",
                    [5.5, 1, 5.5]
                )
                scene.idle(20)
                scene.world.modifyEntity(zombie, entity => {
                    entity.setItemSlot(
                        "mainhand",
                        "immersive_melodies:bagpipe"
                    )
                })
                scene.idle(20)
                scene.text(
                    100,
                    "僵尸也可以拾取并演奏乐器"
                )
                scene.idle(100)
                scene.text(
                    100,
                    "当其他生物正在演奏时，此时再次演奏即可同奏"
                )
                scene.idle(100)
                const skeleton = scene.world.createEntity(
                    "minecraft:skeleton",
                    [5.5, 1, 3.5]
                )
                scene.idle(20)
                scene.world.modifyEntity(skeleton, entity => {
                    entity.setItemSlot(
                        "mainhand",
                        "immersive_melodies:bagpipe"
                    )
                })
                scene.idle(20)

                scene.text(
                    100,
                    "其他生物也可以使用不同的乐器进行演奏"
                )
                scene.idle(100)
            }
        )
})