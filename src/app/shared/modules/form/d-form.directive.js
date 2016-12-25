export default function() {
  var directive = {
    bindToController: true,
    controller: formCtrl,
    controllerAs: 'form',
    restrict: 'A',
    scope: true
  };

  return directive;

  function formCtrl($scope) {
    'ngInject';
    var vm = this;


    
    return this; 
  }

}
