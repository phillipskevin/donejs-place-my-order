import AppMap from "can-ssr/app-map";
import route from 'can/route/';
import 'can/route/pushstate/';

const AppState = AppMap.extend({
      message: 'Hello World!',
        title: 'place-my-order'
});

route(':page', { page: 'home' });
route(':page/:slug', { slug: null });
route(':page/:slug/:action', { slug: null, action: null });

export default AppState;
