import dAutoplay from './d-autoplay.directive';
import './autoplay.less';

export default angular
  .module('Drones.Autoplay', [])
  .directive('dAutoplay', dAutoplay)
  .name;