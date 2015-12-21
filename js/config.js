let config = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      // url: '/',
      abstract: true,
      templateUrl: '../templates/root.tpl.html'
    })
    .state('root.home',{
      url: '/',
      templateUrl: '../templates/home.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: '../templates/login.tpl.html'
    })
    .state('root.browse',{
      url: '/browse',
      templateUrl: '../templates/browse.tpl.html'
    })
    .state('root.search',{
      url: '/search',
      templateUrl: '../templates/search.tpl.html'
    })
    .state('root.post',{
      url: '/post',
      templateUrl: '../templates/post.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;