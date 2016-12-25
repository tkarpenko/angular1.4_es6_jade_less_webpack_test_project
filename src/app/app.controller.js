export default class appCtrl {
  constructor(
    browserService,
    $scope,
    $state,
    $rootScope
  ) {
    'ngInject';
    
    $rootScope.bodyClass = '';

    this.browserService  = browserService;
    $rootScope.bodyClass += ' '+this.browserService.getType();
  }
}
