var app = angular.module('employee', []);
app.controller('myfunc', function($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        var obj = response.data;
        $scope.rec = obj;
    });
     $scope.red = function(ind){
        console.log(ind);
        ind += 1;
        $http.get("https://jsonplaceholder.typicode.com/users/" + ind)
        .then(function(response) {
            var obj = response.data;
            $scope.details = obj;
            console.log(obj);
        });
     }
})