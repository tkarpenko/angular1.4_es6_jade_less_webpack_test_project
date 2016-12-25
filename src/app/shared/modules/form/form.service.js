export default class form {
  constructor(formConst) {
    'ngInject';

    this.validation = validation;

    function validation() {}

    validation.prototype.email = function( email ) {
      if ( email === undefined ) return false;
      return formConst.patterns.email.test( email );
    };
    
    validation.prototype.password = function( password ) {
      if ( password === undefined ) return false;
      return formConst.patterns.password.test( password );
    };

    validation.prototype.noCode = function( text ) {
      if ( text === undefined ) return false;
      return formConst.patterns.noCode.test( text );
    };

    validation.prototype.fullName = function( text ) {
      if ( text === undefined ) return false;
      return formConst.patterns.fullName.test( text );
    };
    
  }
  
  // Watch the click event on <input type="checkbox">
  // and change css-clas for parent label
  aliveCustomCheckboxes ( elem ) {

    var checkboxes = elem.querySelectorAll('[type="checkbox"]');

    // for all checkboxes set eventlistener
    for ( var i = 0, len = checkboxes.length; i < len; i++ ) {
      
      // Set click events to all checkboxes 
      checkboxes[i].onclick = function( e ) {

        // Checking incoming data
        if ( e.currentTarget.nodeName !== 'INPUT' ) return;
        // Add css-class "Checked" to label
        // that was clicked
        e.currentTarget.parentNode.classList.toggle( 'checked' );
      };
    };
  }

  // Watch the click event on <input type="radio">
  // and change css-clas for parent label
  aliveCustomRadios ( elem ) {

    var radios = elem.querySelectorAll('[type="radio"]');

    // for all radios set eventlistener
    for ( var i = 0, len = radios.length; i < len; i++ ) {

      // Set click events for "Select Button" of all memberships 
      radios[i].onclick = function( e ) {

        // Checking incoming data
        if ( e.currentTarget.nodeName !== 'INPUT' ) return;

        // Switch off all checked radios 
        // (if everything is OK there is only one checked radio button
        //  at any time)
        uncheckRadios();

        // Add css-class "Checked" to label
        // that was clicked
        e.currentTarget.parentNode.classList.toggle( 'checked' );
      };
    };


    /* Help function for switch off all selected radio buttons */
    function uncheckRadios() {
      // Find all checked radios
      // (if everything is OK there is only one checked radio button
      //  at any time)
      var checked = elem.querySelectorAll( '.form-radio.checked' );

      // Remove css-class "checked" from any checked radio buttons
      for ( var i = 0, len = checked.length; i < len; i++ ) {
        checked[i].classList.remove( 'checked' );
      }
    }
  }

  validate() {
    return new this.validation();
  }
}