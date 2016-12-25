'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.scheduler', {
      url: '/scheduler',
      access: {
        isFree: false
      },
      views: {
        'content': {
          templateProvider: ($q) => {
            return $q((resolve) => {
              require.ensure([], () => resolve(require('./scheduler.jade')()), 'scheduler');
            });
          },
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