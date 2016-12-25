export default class homeCtrl {
  constructor($scope, $timeout, $rootScope) {
    'ngInject';

    this.widthForDetectingScroll = 120;
    this.isScrolling = false;
    this.scrollTimer = null;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$rootScope = $rootScope;

    this.$scope.posX = 0;

    this.$rootScope.bodyClass += ' home_page';
    this.$scope.$on('$destroy', 
                     () => { this.$rootScope.bodyClass = this.$rootScope.bodyClass.replace(/ home_page/g, '')});
  }

  doScroll(event) {
    this.isScrolling = true;
    this.scrollIter(event);
  }

  scrollIter(event) {
    if ( this.isScrolling ) {
      this.scrollToLeft( event );
      this.scrollTimer = setTimeout( this.scrollIter.bind(this, event), 500 );
    } else {
      clearTimeout( this.scrollTimer );
    }
  }

  stopScroll(event) {
    this.isScrolling = false;
    clearTimeout( this.scrollTimer );
  }

  scrollToLeft(event) {
    let windowWidth = document.body.clientWidth;

    if ( windowWidth - event.clientX < this.widthForDetectingScroll ) {
      this.$timeout( move.bind(this, 1), 0 );

    } else if ( event.clientX < this.widthForDetectingScroll ) {
      this.$timeout( move.bind(this, -1), 0 );
    }

    function move(direction) {
      this.$scope.posX = this.$scope.posX + direction * 40;
    }
  }
}