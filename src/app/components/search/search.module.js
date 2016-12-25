import searchRoutes from './search.routes';
import './search.less';

export default angular
  .module('Drones.Search', [])
  .config(searchRoutes)
  .name;
