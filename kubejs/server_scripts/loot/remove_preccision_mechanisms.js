ServerEvents.blockLootTables(event => {
  // This event is here only to ensure the file loads
})

ServerEvents.lootTables(event => {
  event.modifyAllTables(table => {
    if (table.hasItem('create:precision_mechanism')) {
      console.log('Removed Precision Mechanism from loot:', table.id)
      table.removeItem('create:precision_mechanism')
    }
  })
})

