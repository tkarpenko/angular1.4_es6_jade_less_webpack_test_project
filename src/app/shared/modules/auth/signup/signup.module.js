import signupCtrl from './signup.controller';

export default angular
  .module('Drones.Auth.Signup', [])
  .controller('signupCtrl', signupCtrl)
  .name;