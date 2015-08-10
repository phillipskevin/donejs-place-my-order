import QUnit from 'steal-qunit';
import Restaurant from './restaurant';

QUnit.module('models/restaurant');

QUnit.test('getList', function(){
  stop();
  Restaurant.getList().then(function(items) {
    QUnit.equal(items.length, 5);
    QUnit.equal(items.attr('0.name'), 'restaurant number 0');
    start();
  });
});
