import loginCtrl from './login.controller';

export default angular
  .module('Drones.Auth.Login', [])
  .controller('loginCtrl', loginCtrl)
  .name;