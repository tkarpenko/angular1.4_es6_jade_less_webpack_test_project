import $ from 'jquery';

export default class videoCtrl {
  constructor($scope, $timeout, $rootScope) {
    'ngInject';
    let vm = this;

    vm.videoListScrollFixedPadding = 90;
    vm.topBlockHeight  = 573;
    vm.videoListHeight = document.documentElement.clientHeight;
    vm.videoListScroll = vm.videoListHeight - vm.videoListScrollFixedPadding;

    vm.isShareOpen     = false;

    vm.$scope     = $scope;
    vm.$timeout   = $timeout;
    vm.$rootScope = $rootScope;
    
    vm.setRerunsListHeight.call(vm);

    vm.$rootScope.bodyClass += ' no_footer';
    vm.$scope.$on('$destroy', 
                     () => { this.$rootScope.bodyClass = this.$rootScope.bodyClass.replace(/ no_footer/g, '')});
  }


  setRerunsListHeight() {
    window.removeEventListener( 'resize', resizeVideoList.bind(this) );
    window.removeEventListener( 'scroll', scrollVideoList.bind(this) );

    var startHeight   = document.documentElement.clientHeight,
        height        = startHeight - this.topBlockHeight,
        styleHeight;

    setRerunsListStyle.call(this);


    function setRerunsListStyle() {
      var scrolled  = window.pageYOffset || document.documentElement.scrollTop;
      var newHeight = ( scrolled > this.topBlockHeight ) ? startHeight : height + scrolled;
      styleHeight   = ( newHeight < 0 ) ? 0 : newHeight;
      this.videoListHeight = styleHeight;
      this.videoListScroll = this.videoListHeight - this.videoListScrollFixedPadding;
      this.$timeout( () => { this.$scope.$broadcast('content.reload', true); }, 0 );
    }

   
    window.addEventListener( 'resize', resizeVideoList.bind(this) );
    window.addEventListener( 'scroll', scrollVideoList.bind(this) );

    function resizeVideoList() {
      startHeight = document.documentElement.clientHeight;
      height      = startHeight - this.topBlockHeight;
      setRerunsListStyle.call(this);
    }

    function scrollVideoList() {
      setRerunsListStyle.call(this);
    }

    this.$scope.$on('$destroy', function() {
      window.removeEventListener( 'scroll', scrollVideoList.bind(this) );
      window.removeEventListener( 'resize', resizeVideoList.bind(this) );
    });
  }

  toggleShare() {
    console.log('toggle', this);
    this.isShareOpen = !this.isShareOpen;
  }
}