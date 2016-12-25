import Auth_LoginModule from './login/login.module';
import Auth_SignupModule from './signup/signup.module';

import authService from './auth.service';

export default angular
  .module('Drones.Auth', [
    Auth_LoginModule,
    Auth_SignupModule
  ])
  .service('authService', authService)
  .name;