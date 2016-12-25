export default class footerCtrl {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
    this.year = (new Date()).getFullYear();
  }
}