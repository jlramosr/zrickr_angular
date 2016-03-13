'use strict';

angular.module('zrickrApp')
  .controller("SignUpController", SignUpController)
  .controller("LoginController", LoginController)
  .controller("LogoutController", LogoutController);

  function SignUpController($auth, $location) {
    var vm = this;
    this.signup = function() {
      var local2 = {email: vm.email, password: vm.password};
      $auth.signup({local: local2})
      .then(function() {
        // Si se ha registrado correctamente,
        // Podemos redirigirle a otra parte
        $scope.hola = true;
        console.log("HOLA");
      })
      .catch(function(response) {
        // Si ha habido errores, llegaremos a esta función
      });
    }
  }

  function LoginController($auth, $location) {
    var vm = this;
    this.login = function(){
      $auth.login({
        username: vm.email,
        password: vm.password
      })
      .then(function(){
        // Si se ha logueado correctamente, lo tratamos aquí.
        // Podemos también redirigirle a una ruta
        $location.path("/")
      })
      .catch(function(response){
        // Si ha habido errores llegamos a esta parte
      });
    }
  }

  function LogoutController($auth, $location) {
    $auth.logout()
      .then(function() {
        // Desconectamos al usuario y lo redirijimos
        $location.path("/")
    });
  }
