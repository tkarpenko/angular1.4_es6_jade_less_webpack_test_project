import scriptLoader from 'scriptjs';

export default function($rootScope, $state, $location, $window, authService) {
// export default function($rootScope, $state, $location, $window) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', function(e, curr, prev) {
    // console.log('init: ', curr.access, e, curr, prev);

    // if (curr.access && !curr.access.isFree ) { //&& !authService.isLoggedIn) {
    //   console.log('reload the login route');
    //   $location.path('/');
    // }
  });



  // $rootScope.user = {};

  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({

      /*
       The app id of the web app;
       To register a new app visit Facebook App Dashboard
       ( https://developers.facebook.com/apps/ )
      */

      appId: '744365079041929',

      
       // Adding a Channel File improves the performance
       // of the javascript SDK, by addressing issues
       // with cross-domain communication in certain browsers.
      

      channelUrl: './shared/fb-auth.jade',

      /*
       Set if you want to check the authentication status
       at the start up of the app
      */

      status: true,

      /*
       Enable cookies to allow the server to access
       the session
      */

      cookie: true,

      /* Parse XFBML */

      xfbml: true
    });

    // authService.watchFBLogin();
  }

  scriptLoader("//connect.facebook.net/en_US/all.js#xfbml=1&version=v2.7&appId=744365079041929");
}