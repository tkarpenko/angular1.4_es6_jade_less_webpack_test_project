import browser from './browser.service';
import toolkit from './toolkit.service';
import session from './session.service';
import ROLES   from './roles.constant';

export default angular
  .module('Drones.Services', [])
  .constant('ROLES', ROLES)
  .service('browserService', browser)
  .service('toolkitService', toolkit)
  .name;