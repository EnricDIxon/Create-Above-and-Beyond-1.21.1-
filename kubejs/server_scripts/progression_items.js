StartupEvents.registry('item', event => {

  event.create('tier_1_token')
    .displayName('Kinetic Certification')
    .tooltip('Proof of basic Create automation')

  event.create('tier_2_token')
    .displayName('Precision Certification')
    .tooltip('Proof of advanced Create machinery')

  event.create('tier_3_token')
    .displayName('Industrial Certification')
    .tooltip('Proof of large-scale automation')

})
