export default function(formConst) {
  'ngInject';

  var directive = {
    restrict: 'A',
    require: '^form',
    link: link
  }
  
  return directive;
 
  function link(scope, elem, attrs, form) {

    var fields    = elem[0].querySelectorAll('[name]'),
        errors    = elem[0].querySelector('.form-error'),
        errorType = elem[0].getAttribute('data-fieldset') || 'default';
    
    // Validate all fields in fieldset after submitting the form
    scope.$on('formSubmited', function() {
      validateFieldset();
    });

    if ( attrs.nolivevalidation === undefined ) {
      // Validate all fields in fieldset after each blur
      // on any fieldset's field
      for ( var i = 0, len = fields.length; i < len; i++ ) {
        fields[i].onblur = validateFieldset;
        fields[i].onfocus = function() {
          elem[0].classList.remove('error');
        }
      }
    }

    /* Help function for validation of all fields in fieldset */
    function validateFieldset() {
      var isError = false,
          fieldName;

      for ( var i = 0, len = fields.length; i < len; i++ ) {
        
        fieldName = fields[i].getAttribute('name');
        if ( ! validateField( fieldName ) ) {
          isError = true;
        }
      }

      if ( isError ) return;

      errors.innerHTML = '';
      elem[0].classList.remove('error');
    }


    function validateField( fieldName ) {
      var valid = true;

      if ( form[ fieldName ] === undefined ) return;
        
      if ( form[ fieldName ].$error.required  ||
           form[ fieldName ].$error.pattern   ||
           form[ fieldName ].$error.maxlength ||
           form[ fieldName ].$error.minlength ||
           form[ fieldName ].$error.uniqueUsername || 
           form[ fieldName ].$error.uniqueEmail ||
           form[ fieldName ].$error.correctlyRetypedField ) {
        elem[0].classList.add('error');
        valid = false;
      }

      if ( form[ fieldName ].$error.required ) {
        errors.innerHTML = formConst.errors[ 'required' ];
      }
      if ( form[ fieldName ].$error.pattern ) {
        errors.innerHTML = formConst.errors[ errorType ].pattern;
      }
      if ( form[ fieldName ].$error.maxlength ) {
        errors.innerHTML = formConst.errors[ errorType ].maxlength;
      }
      if ( form[ fieldName ].$error.minlength ) {
        errors.innerHTML = formConst.errors[ errorType ].minlength;
      }
      if ( form[ fieldName ].$error.uniqueUsername ) {
        errors.innerHTML = formConst.errors[ errorType ].uniqueUsername;
      }
      if ( form[ fieldName ].$error.uniqueEmail ) {
        errors.innerHTML = formConst.errors[ errorType ].uniqueEmail;
      }
      if ( form[ fieldName ].$error.correctlyRetypedField ) {
        errors.innerHTML = formConst.errors[ errorType ].correctlyRetypedField;
      }

      return valid;
    }
  }
}