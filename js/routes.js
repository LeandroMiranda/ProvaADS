angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('buscarProduto', {
    url: '/page2',
    templateUrl: 'templates/buscarProduto.html',
    controller: 'buscarProdutoCtrl'
  })

  .state('perfil', {
    url: '/page3',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});