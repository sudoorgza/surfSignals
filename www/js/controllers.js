angular.module('starter.controllers', [])

.controller('HandSignalsCtrl', function($scope, Signals) {
  $scope.signals = Signals.allOfType("hand");
})

.controller('FlagSignalsCtrl', function($scope, Signals) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.signals = Signals.allOfType("flag");
})

.controller('BoardSignalsCtrl', function($scope, Signals) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.signals = Signals.allOfType("board");
});
