(function(angular){
	
	'use strict';
	
		
	angular.module('myFirstAngularAppApp')
		.controller('CommunityEventCtrl', function($scope){
			
			$scope.welcomeText = 'Here are community events that I participate in:';
			
			$scope.communityEvents = [];

			$scope.communityEvents.push(
				{
					title: 'Summer 2015 Class',
				description: 'Learn about web dev'
				},
				{
							title: 'Winter 2016 Class',
				description: 'Learn about APIs'
				});
			
			
		});
		
})(window.angular);