import headerCtrl from './header.controller';
import './header.less';

export default angular
  .module('Drones.Header', [])
  .controller('headerCtrl', headerCtrl)
  .name;