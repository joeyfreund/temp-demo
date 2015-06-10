'use strict';

var FrontDocs = angular.module('FrontDocs', ['ui.router']);


FrontDocs.factory('DataService', function() {
  var DataService = {};

  DataService.getItems = function() { return [

	{title: 'Pacer Docs', url: 'http://xnlogic.github.io/pacer', 
  	 icons: ['help'],
  	 tags: ['doc', 'pacer'],
  	 thumbnail_url: 'img/thumbnails/pacer-docs.jpeg',
  	 description: 'Pacer documentation website. Pacer is an open-source, JRuby library for efficient graph traversal and extensible data modeling.'
  	},

  	{title: 'XN Wiki', url: 'https://github.com/xnlogic/xnlogic/wiki', 
  	 icons: ['help', 'construction'],
  	 tags: ['doc', 'xn', 'wiki', 'in-progress'],
  	 thumbnail_url: 'img/thumbnails/xn-wiki.jpeg',
  	 description: 'Unofficial documentation of the XN framework. Feel free to add/edit the wiki.'
 	},

  	{title: 'Blueprints',  url: 'https://github.com/xnlogic/blueprints', 
  	 icons: ['code'],
  	 tags: ['code', 'blueprints', 'repo'],
  	 thumbnail_url: 'img/thumbnails/blueprints-repo.jpeg',
  	 description: 'Blueprints library (forked from Tinkerpop) - A set of unified interfaces for graph operations, implementation of adapters for a few graph DB\'s (e.g. Neo4j) as well as an in-memory graph called TinkerGraph.'
  	},

  	{title: 'Intro to XN',  url: 'http://slides.com/xnlogic/xn-intro', 
  	 icons: ['presentation'],
  	 tags: ['xn', 'slide', 'doc'],
  	 thumbnail_url: 'img/thumbnails/intro-to-xn.jpg',
  	 description: 'Training session slides'
  	},

	{title: 'XN - Getting Started Tutorial',  url: 'http://xnlogic.github.io/getting_started/', 
  	 icons: ['tutorial'],
  	 tags: ['xn', 'doc', 'tutorial'],
  	 thumbnail_url: 'img/thumbnails/xn-getting-started.jpeg',
  	 description: 'Includes code examples and walkthroughs'
  	}


  	];
  };

  DataService.getPageHeader = function() { return 'XN Logic - FrontDocs' };


  DataService.getTags = function() {
  		var tags = new Set();
  		var items = DataService.getItems();
  		for (var i = 0; i < items.length; i++) {
  			var item = items[i];
  			if(item.tags){
  				item.tags.forEach(function(tag){tags.add(tag);})
  			}
  		};
  		return tags;
  };


  return DataService;
});




FrontDocs.controller('FrontDocsHomeCtrl', function($scope, DataService) {
	$scope.pageHeader = DataService.getPageHeader();
	$scope.docItems  = DataService.getItems();
	$scope.tags = [];
	DataService.getTags().forEach(function(tag){$scope.tags.push(tag);});
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

