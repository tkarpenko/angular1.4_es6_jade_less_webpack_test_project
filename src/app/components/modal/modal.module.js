import modalRoutes from './modal.routes';
import modalCtrl from './modal.controller';
import dModalMenu from './modal-menu/d-modal-menu.directive';
import './modal.less';

export default angular
  .module('Drones.Modal', [])
  .directive('dModalMenu', dModalMenu)
  .controller('modalCtrl', modalCtrl)
  .config(modalRoutes)
  .name;