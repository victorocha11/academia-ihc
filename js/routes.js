angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.ajustes', {
    url: '/ajustes',
    views: {
      'tab1': {
        templateUrl: 'templates/ajustes.html',
        controller: 'ajustesCtrl'
      }
    }
  })

  .state('tabsController.treinos', {
    url: '/treinos',
    views: {
      'tab2': {
        templateUrl: 'templates/treinos.html',
        controller: 'treinosCtrl'
      }
    }
  })

  .state('tabsController.dietas', {
    url: '/dietas',
    views: {
      'tab3': {
        templateUrl: 'templates/dietas.html',
        controller: 'dietasCtrl'
      }
    }
  })

  .state('dicasDeEmagrecimento', {
    url: '/emagrecimento',
    templateUrl: 'templates/dicasDeEmagrecimento.html',
    controller: 'dicasDeEmagrecimentoCtrl'
  })

  .state('login', {
    url: '/home',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.treinoPesado', {
    url: '/treinoPesado',
    views: {
      'tab2': {
        templateUrl: 'templates/treinoPesado.html',
        controller: 'treinoPesadoCtrl'
      }
    }
  })

  .state('treinoModerado', {
    url: '/treinoModerado',
    templateUrl: 'templates/treinoModerado.html',
    controller: 'treinoModeradoCtrl'
  })

  .state('treinoLeve', {
    url: '/treinoLeve',
    templateUrl: 'templates/treinoLeve.html',
    controller: 'treinoLeveCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/ajustes')


});