import superMap from 'can-connect/can/super-map/';

export const connection = superMap({
  url: '/api/states',
  idProp: 'short',
  name: 'states'
});

export default connection.Map;
