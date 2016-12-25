'use strict';

import homeRoutes from './home.routes';
import homeCtrl   from './home.controller';
import homeStyles from './home.less';

export default angular
  .module('Drones.Home', [])
  .controller('homeCtrl', homeCtrl)
  .config(homeRoutes)
  .name;