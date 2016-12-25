export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.home', {
      url: '/',
      access: {
        isFree: true
      },
      views: {
        'content': {
          templateProvider: ($q) => {
            return $q((resolve) => {
              require.ensure([], () => resolve(require('./home.jade')()), 'home');
            });
          },
          controller: 'homeCtrl',
          controllerAs: 'home',
        },
        'header': {
          template: require('../../shared/modules/header/header.jade'),
          controller: 'headerCtrl',
          controllerAs: 'header',
        },
        'footer': {
          template: require('../../shared/modules/footer/footer.jade'),
          controller: 'footerCtrl',
          controllerAs: 'footer',
        }
      }
    })
}
