var app = angular.module('RouteApp');

app.controller('FirstController', ['$scope', function ($scope) {
    //här är logiken som körs när man kommer till root page av din sida.
    $scope.name = 'Ikhlaq';
    $scope.names = ['Max', 'Ikhlaq', 'Calle'];
}]);

app.controller('ResultsController',['$scope', function ($scope) {
    $scope.results = [
        {name: 'Max', score: 4 },
        {name: 'calle', score: 8 },
        {name: 'Ikhlaq', score: 3 },
    ];
    

}]);