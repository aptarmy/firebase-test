var firebaseApp = angular.module('firebaseApp', [
    'ngRoute',
    'firebase',
    'firebaseController',
]);

firebaseApp.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/list.html',
            controller: 'FbListCtrl'
        }).
        when('/insert', {
            templateUrl: 'partials/form.html',
            controller: 'FbInsertCtrl'
        }).
        when('/edit/:key', {
            templateUrl: 'partials/form.html',
            controller: 'FbEditCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
