var app = angular.module('app',['ngRoute','ngResource'])

.controller('MainController',function($scope,$location,Reports){
	$scope.reports=Reports.query();
})

.controller('ReportShowController',function($scope,Reports,$routeParams,$window){
	$scope.report=Reports.get({id: $routeParams.id});
	$scope.back=function(){
		$window.history.back();
	};
})

.config(function($routeProvider){
	
	$routeProvider
	.when('/',{templateUrl: '/views/main.html', controller: 'MainController'})
	.when('/reports/:id',{templateUrl: '/views/report-show.html', controller: 'ReportShowController'})
	.otherwise('/')

	;
})

.factory('Reports',function($resource){
	return $resource('/reports/:id');
})

;