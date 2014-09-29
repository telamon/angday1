var app = angular.module('app',['ngRoute','ngResource']);

/**
 * The main controller that fetches and lists `reports` from the backend. 
 */
app.controller('MainController',function($scope,$location,Reports){
	$scope.reports=Reports.query();
})

/**
 * Report Show controller that fetches and displays a single report
 */
app.controller('ReportShowController',function($scope,Reports,$routeParams,$window){
	$scope.report=Reports.get({id: $routeParams.id});

	// Updating the resource through a POST statement
	$scope.unstuck=function(){
		// Modify resource
		$scope.report.state = "free";
		// Persist changes
		$scope.report.$save();
	}

	// Programatically manipulate the history through $window wrapper
	$scope.back=function(){
		$window.history.back();
	};
})

/**
 * Routes Definition
 */
app.config(function($routeProvider){
	
	$routeProvider
	.when('/',{templateUrl: '/views/main.html', controller: 'MainController'})
	.when('/reports/:id',{templateUrl: '/views/report-show.html', controller: 'ReportShowController'})
	.otherwise('/')

	;
})

/**
 * The `Reports` resource, simply mapped to the GET/PUT/POST/DELETE backend 
 * actions on http://localhost:4567/reports/{reportId}
 */
app.factory('Reports',function($resource){
	return $resource('/reports/:id',{id:'@id'});
})

;
