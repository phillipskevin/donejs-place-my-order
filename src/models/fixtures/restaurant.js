import fixture from 'can/util/fixture/';

const store = fixture.store(5, function(i){
  return {
    _id: i,
    name: "restaurant number "+i,
    ownerId: fixture.rand(10)
  };
});

const restaurantsFixture = [{
  _id: 1,
  name: 'Cheese City',
  slug:'cheese-city',
  address: {
    city: 'Casadina',
    state: 'CA'
  }
}, {
  _id: 2,
  name: 'Crab Barn',
  slug:'crab-barn',
  address: {
    city: 'Alberny',
    state: 'NT'
  }
}];

fixture({
  'GET /api/restaurants': function(req) {
    if(req.data['address.city'] === 'Alberny' && req.data['address.state'] === 'NT') {
      return { data: [ restaurantsFixture[1] ] };
    }

    return { data: restaurantsFixture };
  },
  'GET /api/restaurants/{_id}': store.findOne,
  'POST /api/restaurants': store.create,
  'PUT /api/restaurants/{_id}': store.update,
  'DELETE /api/restaurants/{_id}': store.destroy
});
