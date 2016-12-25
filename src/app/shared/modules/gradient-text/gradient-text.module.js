import dGradientText from './d-gradient-text.directive';
import './gradient-text.less';

export default angular
  .module('Drones.GradientText', [])
  .directive('dGradientText', dGradientText)
  .name;