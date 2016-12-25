export default function($timeout) {
  'ngInject';
  var directive = {
    restrict: 'AE',
    template: require('./autoplay.jade'),
    replace: true,
    scope: true,
    link: link
  };

  return directive;

  function link(scope, elem, attrs) {
    scope.isOn = false;
    scope.toggleAutoplay = toggleAutoplay;

    function toggleAutoplay() {
      scope.isOn = !scope.isOn;
    }
  }
}