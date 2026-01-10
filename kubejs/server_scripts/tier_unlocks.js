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
const TIERS = {
  TIER_1: 'tier_1',
  TIER_2: 'tier_2',
  TIER_3: 'tier_3'
}
ServerEvents.playerInventoryChanged(event => {
  const player = event.player

  if (player.inventory.has('kubejs:tier_1_token')) {
    player.stages.add(TIERS.TIER_1)
  }

  if (player.inventory.has('kubejs:tier_2_token')) {
    player.stages.add(TIERS.TIER_2)
  }

  if (player.inventory.has('kubejs:tier_3_token')) {
    player.stages.add(TIERS.TIER_3)
  }
})

ServerEvents.recipes(event => {

  // Tier 1 gated
  event.remove({ mod: 'create_new_age' })
  event.remove({ mod: 'create_metalwork' })

  // Re-add when tier is unlocked
  event.staged(TIERS.TIER_1, e => {
    // add specific recipes here
  })

  event.staged(TIERS.TIER_2, e => {
    // bulk processing, alloys, etc
  })

  event.staged(TIERS.TIER_3, e => {
    // sequenced assembly, logistics
  })
})

