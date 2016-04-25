"use strict"
let myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/view1',
    {
      controller: 'SimpleController',
      templateUrl: 'Partials/view1.html'
    })
    .when('/view2',
    {
      controller: 'SimpleController',
      templateUrl: 'Partials/view2.html'
    })
    .otherwise({ redirectTo: '/view1' });
});

myApp.factory('simpleFactory', function() {
  let people = [
    {name:'John Smith', city:'Phoenix'},
    {name:'Dave Doe', city:'New York'},
    {name: 'Susan Brown', city: 'San Francisco'}, 
    {name:'Kate Dunn', city:'Boston'}
    ];
    let factory = {};
    factory.getPeople = function() {
      return people;
    };
    factory.postPeople = function(person) {

    };

    return factory;

});
let controllers = {};
controllers.SimpleController = function ($scope, simpleFactory) {
  $scope.people = [];
  init();
  function init() {
    $scope.people = simpleFactory.getPeople();
  }
  $scope.addPerson = function () {
    $scope.people.push(
      {
      name: $scope.newPerson.name, 
      city: $scope.newPerson.city
      });
  };
};
myApp.controller(controllers);
