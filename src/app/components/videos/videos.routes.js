export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.videos', {
      url: '/videos',
      access: {
        isFree: true
      },
      views: {
        'content': {
          templateProvider: ($q) => {
            return $q((resolve) => {
              require.ensure([], () => resolve(require('./videos.jade')()), 'videos');
            });
          },
          controller: 'videosCtrl',
          controllerAs: 'videos',
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