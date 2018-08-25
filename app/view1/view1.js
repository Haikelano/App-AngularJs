'use strict';

angular.module('myApp.view1', ['ngRoute'] )

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.filter('reverse', function() {
    return function(input, uppercase) {
        input = input || '';
        var out = "";
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
})
     .controller('View1Ctrl',function ($scope) {
        $scope.message = "houka";
        $scope.articles= [{ "name":"Samsung J7","quantite":1, "price":"30.00" },
            { "name":"Samsung A7","quantite":1, "price":"40.00" },
            { "name":"Huwawi A7","quantite":1, "price":"35.00" }];
     /* Calculer le total de tous le prix */
        $scope.total = function () {
          var total = 0;
            for (var i=0; i<$scope.articles.length; i++){
              total +=$scope.articles[i].price * $scope.articles[i].quantite;
            }
            return total;
        };
        /*******Calculer le remise si la somme passe 100 **********************/
function calculRemise(newValue, oldValue, scope) {
        $scope.remise = (newValue > 100 ) ? newValue * 0.10 : 0;
        };

/* retourner la prix final */
$scope.final = function () {
    return $scope.total() - $scope.remise;
    };
/* Methode watch */
$scope.$watch($scope.total, calculRemise);

         $scope.greeting = 'hello';
    });
