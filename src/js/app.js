var app = angular.module('app',['ngRoute'])

.controller('MainController',function($scope,$location,$reports){
	$scope.reports=$reports
})

.controller('ReportShowController',function($scope,$reports,$routeParams,$window){
	$scope.report=$reports[$routeParams.id];
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

.value('$reports',[
		{
			state: 'stuck',
			loreportion : [57.706742, 11.968721],
			reportedAt : new Date("Aug 25 2014 10:37:46"),
			backstory: 'Fixing reception, got stuck',
			image: '/images/cat1.jpg'
		},
		{
			state: 'stuck',
			loreportion : [57.705710, 11.974096],
			reportedAt : new Date("Aug 27 2014 10:37:46"),
			backstory: 'Climbed a tree, got stuck',
			image: '/images/cat2.jpg'
		},
		{
			state: 'stuck',
			loreportion : [57.705710, 11.974096],
			reportedAt : new Date("Aug 28 2014 10:37:46"),
			backstory: 'Lost my keys, got stuck',
			image: '/images/cat3.jpg'
		},
		{
			state: 'stuck',
			loreportion : [57.705710, 11.974096],
			reportedAt : new Date("Aug 29 2014 10:37:46"),
			backstory: 'Inspected contents of a jar, got stuck',
			image: '/images/cat4.jpg'
		}
	])
;