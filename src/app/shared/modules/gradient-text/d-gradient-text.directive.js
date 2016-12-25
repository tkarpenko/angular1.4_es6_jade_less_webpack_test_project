export default function($timeout, toolkitService) {
  'ngInject';
  var directive = {
    restrict: 'AE',
    template: require('./gradient-text.jade'),
    replace: true,
    scope: true,
    link: link
  };

  return directive;

  function link(scope, elem, attrs) {
    scope.svgWidth      = '0px';
    scope.className     = attrs.className;
    scope.gradientText  = attrs.text;
    scope.svgHtmlID     = attrs.text.toLowerCase().replace(/\ /g, '_') + toolkitService.random(1,100);
    scope.fillSvgHtmlID = "url(#" + scope.svgHtmlID + ")";

    $timeout(() => {
      let svgElem           = elem[0].querySelector('svg');
      let svgHiddenTextElem = elem[0].querySelector('.gradient-text-text_hidden_copy');
      scope.svgWidth = Math.floor(svgHiddenTextElem.clientWidth) + 'px';
    },10);
  }
}