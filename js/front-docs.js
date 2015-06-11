'use strict';

var FrontDocs = angular.module('FrontDocs', ['ui.router']);



FrontDocs.controller('FrontDocsHomeCtrl', function($scope, $http) {
	var selectedTags = new Set();


	// Get the data from a JSON file ...
	$http.get('data/front-docs.json')
        .success(function (data) {
            
            $scope.pageHeader = data.pageHeader;
            $scope.docItems   = data.frontDocsItems;

			// Collect tags from all items ...
			var tags = new Set();
			$scope.docItems.forEach(function(docItem){
				docItem.tags.forEach(function(tag){
					tags.add(tag);
				});
			});

			// Save the tags in an array (to allow the template to ng-repeat through them)
			$scope.tags = [];
			tags.forEach(function(tag){$scope.tags.push(tag);});
			

        })

        .error(function (data, status, headers, config) {
            //  TODO: Error handling here!
        }
    );


    // Scope function to handle the different states of the tag buttons ...

	$scope.toggleTag = function(tag){
		if(selectedTags.has(tag)){
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);			
		}
	};

	$scope.tagIsOn = function(tag){
		return selectedTags.has(tag);
	};

	$scope.shouldDisplayItem = function(frontDocsItem){
		var result = true;

		// FIXME: Short-circuit it
		selectedTags.forEach(function(tag){
			result = result && frontDocsItem.tags && frontDocsItem.tags.indexOf(tag) > -1;
		});

		return result;
	};

});



FrontDocs.directive('frontDocsItem', function(){
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'templates/front-docs-item.html',
	};
});


FrontDocs.directive('topBar', function(){
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'templates/top-bar.html',
	};
});

