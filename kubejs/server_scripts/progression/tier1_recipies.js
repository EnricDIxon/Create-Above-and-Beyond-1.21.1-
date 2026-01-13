ServerEvents.recipes(event => {
  event.remove({ output: 'create:andesite_alloy' })
})

//1:1 andesite alloy generation
ServerEvents.recipes(event => {
  event.staged(global.TIERS.TIER_1, e => {
    e.recipes.create.mixing(
      '2x create:andesite_alloy',
      [
        '2x minecraft:iron_nugget',
        '2x minecraft:andesite'
      ]
    )
  })
})


//making andesite pebbles for better yield of alloy
ServerEvents.recipes(event => {
  event.recipes.create.crushing(
    [
      Item.of('kubejs:andesite_pebble', 4),
      Item.of('kubejs:andesite_pebble').withChance(0.5)
    ],
    'minecraft:andesite'
  ).processingTime(200)
})

//cheaper recipe for andesite alloy
ServerEvents.recipes(event => {
  event.staged(global.TIERS.TIER_1, e => {
    e.recipes.create.mixing(
      'create:andesite_alloy',
      [
        '2x minecraft:iron_nugget',
        'kubejs:andesite_pebble'
      ]
    )
  })
})
