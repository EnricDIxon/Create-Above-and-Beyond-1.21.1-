JEIEvents.hideItems(event => {

  // --- Infinite / Utility (late game) ---
  event.hide(/createcobblestone:.*/)

  // --- Mobility ---
  event.hide(/create_hypertube:.*/)

  // --- Economy ---
  event.hide(/createcoins:.*/)
  event.hide(/createnumismatics:.*/)

  // --- Decoration (late unlock) ---
  event.hide(/copycats:.*/)
  event.hide(/create_vibrant_vaults:.*/)

  // --- Advanced Create add-ons ---
  event.hide(/createdieselgenerators:.*/)
  event.hide(/createliquidfuel:.*/)
  event.hide(/createcompressed:.*/)
  event.hide(/create_enchantablemachinery:.*/)

  // --- Dragons Plus (Create integration only) ---
  event.hide(/create_dragons_plus:.*/)


})
