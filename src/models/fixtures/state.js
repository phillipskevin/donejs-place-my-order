import fixture from 'can/util/fixture/';

const statesFixture = [
  { name: 'Calisota', short: 'CA' },
  { name: 'New Troy', short: 'NT'}
];

const store = fixture.store(5, function(i){
  return {
    short: i,
    name: "state number "+i,
    ownerId: fixture.rand(10)
  };
});

fixture({
  'GET /api/states': function() {
    return statesFixture;
  },
  'GET /api/states/{short}': store.findOne,
  'POST /api/states': store.create,
  'PUT /api/states/{short}': store.update,
  'DELETE /api/states/{short}': store.destroy
});
