angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('ajustes', {
    url: '/ajustes',
    templateUrl: 'templates/ajustes.html',
    controller: 'ajustesCtrl'
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

  .state('tabsController.suplementaO', {
    url: '/suplemento',
    views: {
      'tab1': {
        templateUrl: 'templates/suplementaO.html',
        controller: 'suplementaOCtrl'
      }
    }
  })

  .state('tabsController.dicasDeEmagrecimento', {
    url: '/emagrecimento',
    views: {
      'tab3': {
        templateUrl: 'templates/dicasDeEmagrecimento.html',
        controller: 'dicasDeEmagrecimentoCtrl'
      }
    }
  })

  .state('tabsController.dicasParaGanhoDeMassaMuscular', {
    url: '/Massa',
    views: {
      'tab3': {
        templateUrl: 'templates/dicasParaGanhoDeMassaMuscular.html',
        controller: 'dicasParaGanhoDeMassaMuscularCtrl'
      }
    }
  })

  .state('tabsController.termogNicos', {
    url: '/termogenicos',
    views: {
      'tab1': {
        templateUrl: 'templates/termogNicos.html',
        controller: 'termogNicosCtrl'
      }
    }
  })

  .state('tabsController.bCAA', {
    url: '/bcaa',
    views: {
      'tab1': {
        templateUrl: 'templates/bCAA.html',
        controller: 'bCAACtrl'
      }
    }
  })

  .state('tabsController.creatina', {
    url: '/creatina',
    views: {
      'tab1': {
        templateUrl: 'templates/creatina.html',
        controller: 'creatinaCtrl'
      }
    }
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

  .state('tabsController.treinoModerado', {
    url: '/treinoModerado',
    views: {
      'tab2': {
        templateUrl: 'templates/treinoModerado.html',
        controller: 'treinoModeradoCtrl'
      }
    }
  })

  .state('tabsController.treinoLeve', {
    url: '/treinoLeve',
    views: {
      'tab2': {
        templateUrl: 'templates/treinoLeve.html',
        controller: 'treinoLeveCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('perfil', {
    url: '/perfil',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

  .state('calcularIMC', {
    url: '/page17',
    templateUrl: 'templates/calcularIMC.html',
    controller: 'calcularIMCCtrl'
  })

$urlRouterProvider.otherwise('/home')


});