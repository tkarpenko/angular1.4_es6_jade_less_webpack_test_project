import dFormFieldError from './validation/d-form-field-error.directive';
import formService from './form.service';
import formConst from './form.constant';
import './form.less';

export default angular
  .module('Drones.Form', [])
  .service('formService', formService)
  .directive('dFormFieldError', dFormFieldError)
  .constant('formConst', formConst)
  .name;