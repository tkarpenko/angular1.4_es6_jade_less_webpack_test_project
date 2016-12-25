export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('search', {
       abstract: true,
       views: {
         'search': {
           template: require('./search.jade')
         }
       }
     })
    .state('search.default', {
      url: '/search',
      template: require('./search.jade'),
      params: {
        product: null
      }
   });
}
