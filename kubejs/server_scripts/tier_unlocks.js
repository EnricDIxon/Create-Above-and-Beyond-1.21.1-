ServerEvents.recipes(event => {

  // Unlock Create Cobblestone Generator
  event.shaped('createcobblestone:cobblestone_generator', [
    'PPP',
    'CMC',
    'PPP'
  ], {
    P: 'create:precision_mechanism',
    C: 'create:andesite_casing',
    M: 'minecraft:bucket'
  })

  // Unlock Hypertube (late mobility)
  event.shaped('create_hypertube:hypertube', [
    ' G ',
    'PCP',
    ' G '
  ], {
    G: 'minecraft:glass',
    P: 'create:precision_mechanism',
    C: 'create:brass_casing'
  })

})

ServerEvents.recipes(event => {

  // Coins are NOT craftable
  event.remove({ mod: 'createcoins' })
  event.remove({ mod: 'createnumismatics' })

  // Coins are QUEST / MACHINE rewards ONLY
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'minecraft:gold_block' },
    results: [{ item: 'createcoins:coin', count: 1 }],
    loops: 5,
    sequence: [
      { type: 'create:pressing', ingredients: [{ item: 'minecraft:gold_block' }], results: [{ item: 'minecraft:gold_block' }] }
    ]
  })

})
