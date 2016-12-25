'use strict';

export default function routing($urlRouterProvider, $stateProvider, $locationProvider) {
  
  "ngInject";
  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('app', {
       views: {
         'app': {
           template: require('./app.jade')
         }
       },
       sticky: true,
       dsr: {
        default: {
           state: 'app.home'
         }
       }
     })
    // .state('app.home', {
    //    url: '/',
    //    views: {
    //      'app': {
    //        template: require('./app2.jade')
    //      }
    //    }
    //  })
    ;

  // $stateProvider.state('app', {
  //     url: '',
  //     views: {
  //       'app@': {
  //         // templateProvider: ($q) => {
  //         //   return $q((resolve) => {
  //         //     require.ensure([], () => resolve(require('./app.jade')()), 'app');
  //         //   });
  //         // },
  //         template: require('./app.jade'),
  //         controller: 'appCtrl',
  //         controllerAs: 'app',
  //       },
  //       'header@': {
  //         template: require('./shared/modules/header/header.jade'),
  //         controller: 'headerCtrl',
  //         controllerAs: 'header',
  //       },
  //       'footer@': {
  //         template: require('./shared/modules/footer/footer.jade'),
  //         controller: 'footerCtrl',
  //         controllerAs: 'footer',
  //       }
  //     },
  //     abstract: true
  // });

  $urlRouterProvider.otherwise('/');
}