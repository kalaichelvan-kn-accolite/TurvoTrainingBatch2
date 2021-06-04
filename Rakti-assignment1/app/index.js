
var app=angular.module("myApp",[]);


app.controller("myCtrl",function($scope,$http,$rootScope)
{

      $http.get("https://jsonplaceholder.typicode.com/comments")
      .then(function(response)
      {
          $scope.comments=response.data;
      });   

    //   $scope.getRow = function(x) {
    //     if (typeof(Storage) !== "undefined") {
    //         localStorage.setItem("Name",x.name);

    //         window.location.href = 'C:/Users/HP/Desktop/Rakti-assignment1/app/page2.html';
    //     }
    //   } 

      $scope.getRow = function(x) {
        console.log(x.email);
        console.log(x.id);
        console.log(x.name);
        console.log(x.body);
        //myFactory.set(x.email);
       // window.location.href = 'C:/Users/HP/Desktop/Rakti-assignment1/app/page2.html';
      };

    });


// app.controller("myCtrl2",function($scope,myFactory)
// {
//     $scope.details=myFactory.get();
// });

//    app.factory("myFactory",function(){
//        var savedData;
//        function set(data)
//        {
//            savedData=data;
//        }
//        function get()
//        {
//            return savedData;
//        }
//        return {
//            set: set,
//            get: get
//        }

//    });


//     app.config(function($routeProvider)
//     {
//         $routeProvider
//         .when('/page2',
//         {
//          templateUrl:"page2.html",
//             controller:"myCtrl2"
//         });
//     });


    //   using local storage
     

