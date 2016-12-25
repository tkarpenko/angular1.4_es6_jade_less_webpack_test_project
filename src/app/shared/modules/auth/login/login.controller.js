export default class loginCtrl {
  constructor($scope, $timeout, $state, formService, formConst, authService) {
    'ngInject';

    this.$scope = $scope;
    this.formService = formService;
    this.formConst = formConst;
    this.authService = authService;
    this.$state = $state;

    /*
    * To bring to the life the custom checkboxes
    */
    $scope.$on('$viewContentLoaded', function(event) {
      $timeout(function() {
        formService.aliveCustomCheckboxes( document.getElementById('login-form') );
      },0);
    });

    /**
      Patterns for validation of inputs
    */
    this.patterns = formConst.patterns;

    this.isRegistration = !! this.$state.params.registration;
    $scope.$on("$locationChangeSuccess", () => { 
      this.isRegistration = !! this.$state.params.registration; 
    });

  }

  submit() {
    // Send event for children directives dFormFiledError
    // After this event all fields are checking validity all together
    // and showing errors if some field is not valid
    this.$scope.$broadcast('formSubmited', true);

    
    // If there is an invalid field then do not send data to server
    if ( ! this.formService.validate().email( this.email ) ||
         ! this.formService.validate().password( this.password ) ) {
      return;
    }

    this.authService.login({
      email: this.email,
      password: this.password
    });
  }
}