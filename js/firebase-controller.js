var firebaseController = angular.module('firebaseController', []);
// -------------------------------------------------------------------------------------------------------
// Firebase List Controller
firebaseController.controller('FbListCtrl', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location){
    var ref = new Firebase("https://burning-fire-4822.firebaseio.com/"); // Create firebase referrence
    $scope.projects = $firebaseArray(ref); // download the data into a local object
    $scope.showLoadding = true; // define loadding varialbe
    $scope.projects.$loaded(function(){ $scope.showLoadding = false; }); // Hide loadding text after loadding complete
    // remove a project function
    $scope.remove = function(key){
        $scope.projects.$remove($scope.projects.$indexFor(key)).then(function(){
            alert("Delete Complete");
            $location.path("/");
        });
    };
}]);
// -------------------------------------------------------------------------------------------------------
// Firebase Edit Controller
firebaseController.controller('FbEditCtrl', ['$scope', '$firebaseArray', '$routeParams', '$location', function($scope, $firebaseArray, $routeParams, $location){
    // Create firebase referrence
    var ref = new Firebase("https://burning-fire-4822.firebaseio.com/");
    var projects = $firebaseArray(ref);
    projects.$loaded(function(){
        // Get specific-project key
        var key = $routeParams.key;
        $scope.project = projects.$getRecord(key);
    });
    $scope.save = function(key){
        projects.$save(projects.$indexFor(key)).then(function(){
            alert("Edit Project Success !!!");
            $location.path("/");
        });
    };
    $scope.cancel = function(){
        $location.path("/");
    };
}]);
// -------------------------------------------------------------------------------------------------------
// Firebase Insert Controller
firebaseController.controller('FbInsertCtrl', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location){
    var ref = new Firebase("https://burning-fire-4822.firebaseio.com/");
    var projects = $firebaseArray(ref);
    $scope.project = {};
    $scope.save = function(){
        projects.$add($scope.project).then(function(){
            alert("Insert New Project Complete");
            $location.path("/");
        });
    };
    $scope.cancel = function(){
        $location.path("/");
    };
}]);
// -------------------------------------------------------------------------------------------------------
