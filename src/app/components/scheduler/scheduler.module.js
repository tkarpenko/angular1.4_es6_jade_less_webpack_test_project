'use strict';

import schedulerRoutes from './scheduler.routes';
import scheduleStyles from './schedule.less';

export default angular
  .module('Drones.Scheduler', [])
  .config(schedulerRoutes)
  .name;