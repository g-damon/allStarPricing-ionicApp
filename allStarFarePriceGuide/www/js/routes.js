angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('allStarPricing', {
    url: '/page4',
    templateUrl: 'templates/allStarPricing.html',
    controller: 'allStarPricingCtrl'
  })

  .state('termsPolicies', {
    url: '/page57',
    templateUrl: 'templates/termsPolicies.html',
    controller: 'termsPoliciesCtrl'
  })

  .state('frequentlyUsedAlbany', {
    url: '/page5',
    templateUrl: 'templates/frequentlyUsedAlbany.html',
    controller: 'frequentlyUsedAlbanyCtrl'
  })

  .state('frequentlyUsedLebanon', {
    url: '/page11',
    templateUrl: 'templates/frequentlyUsedLebanon.html',
    controller: 'frequentlyUsedLebanonCtrl'
  })

  .state('allLebanonDestinations', {
    url: '/page9',
    templateUrl: 'templates/allLebanonDestinations.html',
    controller: 'allLebanonDestinationsCtrl'
  })

  .state('allAlbanyDestinations', {
    url: '/page34',
    templateUrl: 'templates/allAlbanyDestinations.html',
    controller: 'allAlbanyDestinationsCtrl'
  })

  .state('lebanonYZDestinations', {
    url: '/page21',
    templateUrl: 'templates/lebanonYZDestinations.html',
    controller: 'lebanonYZDestinationsCtrl'
  })

  .state('albanyYZDestinations', {
    url: '/page56',
    templateUrl: 'templates/albanyYZDestinations.html',
    controller: 'albanyYZDestinationsCtrl'
  })

  .state('lebanonWDestinations', {
    url: '/page33',
    templateUrl: 'templates/lebanonWDestinations.html',
    controller: 'lebanonWDestinationsCtrl'
  })

  .state('albanyWDestinations', {
    url: '/page55',
    templateUrl: 'templates/albanyWDestinations.html',
    controller: 'albanyWDestinationsCtrl'
  })

  .state('lebanonUVDestinations', {
    url: '/page32',
    templateUrl: 'templates/lebanonUVDestinations.html',
    controller: 'lebanonUVDestinationsCtrl'
  })

  .state('albanyUVDestinations', {
    url: '/page54',
    templateUrl: 'templates/albanyUVDestinations.html',
    controller: 'albanyUVDestinationsCtrl'
  })

  .state('lebanonTDestinations', {
    url: '/page31',
    templateUrl: 'templates/lebanonTDestinations.html',
    controller: 'lebanonTDestinationsCtrl'
  })

  .state('albanyTDestinations', {
    url: '/page53',
    templateUrl: 'templates/albanyTDestinations.html',
    controller: 'albanyTDestinationsCtrl'
  })

  .state('lebanonSDestinations', {
    url: '/page30',
    templateUrl: 'templates/lebanonSDestinations.html',
    controller: 'lebanonSDestinationsCtrl'
  })

  .state('albanySDestinations', {
    url: '/page52',
    templateUrl: 'templates/albanySDestinations.html',
    controller: 'albanySDestinationsCtrl'
  })

  .state('lebanonRDestinations', {
    url: '/page15',
    templateUrl: 'templates/lebanonRDestinations.html',
    controller: 'lebanonRDestinationsCtrl'
  })

  .state('albanyRDestinations', {
    url: '/page51',
    templateUrl: 'templates/albanyRDestinations.html',
    controller: 'albanyRDestinationsCtrl'
  })

  .state('lebanonPDestinations', {
    url: '/page28',
    templateUrl: 'templates/lebanonPDestinations.html',
    controller: 'lebanonPDestinationsCtrl'
  })

  .state('albanyPDestinations', {
    url: '/page50',
    templateUrl: 'templates/albanyPDestinations.html',
    controller: 'albanyPDestinationsCtrl'
  })

  .state('lebanonODestinations', {
    url: '/page27',
    templateUrl: 'templates/lebanonODestinations.html',
    controller: 'lebanonODestinationsCtrl'
  })

  .state('albanyODestinations', {
    url: '/page49',
    templateUrl: 'templates/albanyODestinations.html',
    controller: 'albanyODestinationsCtrl'
  })

  .state('lebanonNDestinations', {
    url: '/page26',
    templateUrl: 'templates/lebanonNDestinations.html',
    controller: 'lebanonNDestinationsCtrl'
  })

  .state('albanyNDestinations', {
    url: '/page48',
    templateUrl: 'templates/albanyNDestinations.html',
    controller: 'albanyNDestinationsCtrl'
  })

  .state('lebanonMDestinations', {
    url: '/page25',
    templateUrl: 'templates/lebanonMDestinations.html',
    controller: 'lebanonMDestinationsCtrl'
  })

  .state('albanyMDestinations', {
    url: '/page47',
    templateUrl: 'templates/albanyMDestinations.html',
    controller: 'albanyMDestinationsCtrl'
  })

  .state('lebanonLDestinations', {
    url: '/page24',
    templateUrl: 'templates/lebanonLDestinations.html',
    controller: 'lebanonLDestinationsCtrl'
  })

  .state('albanyLDestinations', {
    url: '/page46',
    templateUrl: 'templates/albanyLDestinations.html',
    controller: 'albanyLDestinationsCtrl'
  })

  .state('lebanonKDestinations', {
    url: '/page23',
    templateUrl: 'templates/lebanonKDestinations.html',
    controller: 'lebanonKDestinationsCtrl'
  })

  .state('albanyKDestinations', {
    url: '/page45',
    templateUrl: 'templates/albanyKDestinations.html',
    controller: 'albanyKDestinationsCtrl'
  })

  .state('lebanonJDestinations', {
    url: '/page22',
    templateUrl: 'templates/lebanonJDestinations.html',
    controller: 'lebanonJDestinationsCtrl'
  })

  .state('albanyJDestinations', {
    url: '/page44',
    templateUrl: 'templates/albanyJDestinations.html',
    controller: 'albanyJDestinationsCtrl'
  })

  .state('lebanonIDestinations', {
    url: '/page20',
    templateUrl: 'templates/lebanonIDestinations.html',
    controller: 'lebanonIDestinationsCtrl'
  })

  .state('albanyIDestinations', {
    url: '/page43',
    templateUrl: 'templates/albanyIDestinations.html',
    controller: 'albanyIDestinationsCtrl'
  })

  .state('lebanonHDestinations', {
    url: '/page19',
    templateUrl: 'templates/lebanonHDestinations.html',
    controller: 'lebanonHDestinationsCtrl'
  })

  .state('albanyHDestinations', {
    url: '/page42',
    templateUrl: 'templates/albanyHDestinations.html',
    controller: 'albanyHDestinationsCtrl'
  })

  .state('lebanonGDestinations', {
    url: '/page18',
    templateUrl: 'templates/lebanonGDestinations.html',
    controller: 'lebanonGDestinationsCtrl'
  })

  .state('albanyGDestinations', {
    url: '/page41',
    templateUrl: 'templates/albanyGDestinations.html',
    controller: 'albanyGDestinationsCtrl'
  })

  .state('lebanonFDestinations', {
    url: '/page17',
    templateUrl: 'templates/lebanonFDestinations.html',
    controller: 'lebanonFDestinationsCtrl'
  })

  .state('albanyFDestinations', {
    url: '/page40',
    templateUrl: 'templates/albanyFDestinations.html',
    controller: 'albanyFDestinationsCtrl'
  })

  .state('lebanonEDestinations', {
    url: '/page14',
    templateUrl: 'templates/lebanonEDestinations.html',
    controller: 'lebanonEDestinationsCtrl'
  })

  .state('albanyEDestinations', {
    url: '/page39',
    templateUrl: 'templates/albanyEDestinations.html',
    controller: 'albanyEDestinationsCtrl'
  })

  .state('lebanonDDestinations', {
    url: '/page16',
    templateUrl: 'templates/lebanonDDestinations.html',
    controller: 'lebanonDDestinationsCtrl'
  })

  .state('albanyDDestinations', {
    url: '/page38',
    templateUrl: 'templates/albanyDDestinations.html',
    controller: 'albanyDDestinationsCtrl'
  })

  .state('lebanonCDestinations', {
    url: '/page12',
    templateUrl: 'templates/lebanonCDestinations.html',
    controller: 'lebanonCDestinationsCtrl'
  })

  .state('albanyCDestinations', {
    url: '/page37',
    templateUrl: 'templates/albanyCDestinations.html',
    controller: 'albanyCDestinationsCtrl'
  })

  .state('lebanonBDestinations', {
    url: '/page13',
    templateUrl: 'templates/lebanonBDestinations.html',
    controller: 'lebanonBDestinationsCtrl'
  })

  .state('albanyBDestinations', {
    url: '/page36',
    templateUrl: 'templates/albanyBDestinations.html',
    controller: 'albanyBDestinationsCtrl'
  })

  .state('lebanonADestinations', {
    url: '/page10',
    templateUrl: 'templates/lebanonADestinations.html',
    controller: 'lebanonADestinationsCtrl'
  })

  .state('albanyADestinations', {
    url: '/page35',
    templateUrl: 'templates/albanyADestinations.html',
    controller: 'albanyADestinationsCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});