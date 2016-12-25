export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('modal', {
       abstract: true,
       url: '/modal',
       views: {
         'modal': {
           template: require('./modal.jade'),
           controller: 'modalCtrl',
           controllerAs: 'modal'
         }
       }
     })
    .state('modal.login', {
      url: '/login?registration',
      views: {
        'modalContent': {
          template: require('../../shared/modules/auth/login/login.jade'),
          controller: 'loginCtrl',
          controllerAs: 'login'
        }
      }
    })
    .state('modal.signup', {
      url: '/signup',
      views: {
        'modalContent': {
          template: require('../../shared/modules/auth/login/login.jade'),
          controller: 'loginCtrl',
          controllerAs: 'login'
        }
      }
    });
}
