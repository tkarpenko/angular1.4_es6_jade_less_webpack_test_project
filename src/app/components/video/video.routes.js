export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.video', {
      url: '/video',
      access: {
        isFree: true
      },
      views: {
        'content': {
          templateProvider: ($q) => {
            return $q((resolve) => {
              require.ensure([], () => resolve(require('./video.jade')()), 'video');
            });
          },
          controller: 'videoCtrl',
          controllerAs: 'video',
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
    });
}
