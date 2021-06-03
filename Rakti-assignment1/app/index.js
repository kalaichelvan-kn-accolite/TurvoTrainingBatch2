var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http)
{

      $http.get("https://jsonplaceholder.typicode.com/comments")
      .then(function(response)
      {
          $scope.comments=response.data;
      });

});