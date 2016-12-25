import videosRoutes from './videos.routes';
import videosCtrl   from './videos.controller';
import './videos.less';

export default angular
  .module('Drones.Videos', [])
  .controller('videosCtrl', videosCtrl)
  .config(videosRoutes)
  .name;