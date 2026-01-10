ServerEvents.recipes(event => {

  // --- LATE GAME / GATED MODS ---
  const gatedMods = [
    'createcobblestone',
    'create_hypertube',
    'create_dragons_plus',
    'createcoins',
    'createnumismatics',
    'copycats',
    'create_vibrant_vaults'
  ]

  gatedMods.forEach(mod => {
    event.remove({ mod: mod })
  })

})
