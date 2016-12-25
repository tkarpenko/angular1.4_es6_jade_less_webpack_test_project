import videoRouting from './video.routes';
import videoCtrl    from './video.controller';
import './video.less';

export default angular
  .module('Drones.Video', [])
  .config(videoRouting)
  .controller('videoCtrl', videoCtrl)
  .name;