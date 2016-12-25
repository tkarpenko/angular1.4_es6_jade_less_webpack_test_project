export default class authService {
  constructor($rootScope, ROLES) {
    'ngInject';

    this.ROLES = ROLES;
    this.isLoggedIn = false;
    this.username = '';
    this.email = ''; 
  }

  login( data ) {
    this.isLoggedIn = true;
    this.email = data.email || '';
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.email = ''; 
  }

  signup() {

  }

  FBsignup() {

  }

  watchFBLogin() {

  // var _self = this;

    FB.Event.subscribe('auth.authResponseChange', function(res) {

      if (res.status === 'connected') {

        /*

         The user is already logged,
         is possible retrieve his personal info
        */
        // _self.getUserInfo();
        // console.log(`This is also the point where you should create a
        //  session for the current user.
        //  For this purpose you can use the data inside the
        //  res.authResponse object.`, res);
        /*
         This is also the point where you should create a
         session for the current user.
         For this purpose you can use the data inside the
         res.authResponse object.
        */
        FB.api('/me', function(res) {
          // console.log('FB.api: ', res);
        });

      }
      else {
        // console.log(`The user is not logged to the app, or into Facebook:
        //  destroy the session on the server.`);
        /*
         The user is not logged to the app, or into Facebook:
         destroy the session on the server.
        */

      }

    });

  }
}