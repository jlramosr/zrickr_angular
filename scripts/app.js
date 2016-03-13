angular.module("zrickrApp", ["satellizer", "ui.router"])
  .config(function($authProvider, $stateProvider, $urlRouterProvider) {

    //Parameters configuration
    $authProvider.loginOnSignup = true;
    $authProvider.loginRedirect = '/';
    $authProvider.logoutRedirect = '/';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginUrl = "http://localhost:3000/login";
    $authProvider.signupUrl = "http://localhost:3000/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "zrickrApp";
    $authProvider.loginRoute = '/login';
    $authProvider.signupRoute = '/signup';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer'; // Local storage name prefix
    //$authProvider.unlinkUrl = '/auth/unlink/';

    //Routes/states configuration
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "../templates/login.html",
        controller: "LoginController",
        controllerAs: "login"
      })
      .state("signup", {
        url: "/signup",
        templateUrl: "../templates/signup.html",
        controller: "SignUpController",
        controllerAs: "signup"
      });
      $urlRouterProvider.otherwise("/");
  });
