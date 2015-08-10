import superMap from 'can-connect/can/super-map/';

export const connection = superMap({
  url: '/api/cities',
  idProp: 'name',
  name: 'states'
});

export default connection.Map;
