import $ from 'jquery';

export default function($timeout, $state, $stateParams) {
  'ngInject';

  var directive = {
    restrict: 'EA',
    replace: true,
    template: require('./modal-menu.jade'),
    link: link
  };

  return directive;

  function link($scope, elem) {

    $scope.predicate = $state.params.registration ? 'signup' : 'login';

    $scope.switchItem = switchItem;
    $scope.menu = [
      {predicate : 'login',   title: 'Log in',    uisref: 'modal.login'},
      {predicate : 'signup',  title: 'Sign Up',   uisref: 'modal.login.registration'}
    ];

    var menuLine = $(".modal-menu .modal-menu_line");
    var menuItemPadding = 14;


    $timeout(function() {
      menuLine
        .width($(".modal-menu .active").width())
        .css("left", $(".modal-menu .active").position().left + menuItemPadding)
    }, 100);
        

    function switchItem($event, predicate) {
      if ( $scope.predicate === predicate ) {
        $scope.predicate = '';
        return;
      }
      $scope.predicate = predicate;
      
      if ( predicate === 'signup' ) {
        $state.params.registration = true;
        $state.transitionTo($state.current.name, $state.params, { notify: false });
      } else {
        delete $state.params.registration;
        $state.transitionTo($state.current.name, $state.params, { notify: false });
      }
      
      var lineLeftPos, 
          lineNewWidth,
          line;

      line = $($event.target);
      lineLeftPos = line.position().left + menuItemPadding;
      lineNewWidth = line.width();
      menuLine.stop().animate({
        left: lineLeftPos,
        width: lineNewWidth
      });
    }
  }
}