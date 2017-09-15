'use strict'

var app = angular.module('loadingIndicatorApp', [])
.directive('loading', ['$http', function ($http) {
  return {
    restrict: 'A',
    template: '<div class="loading-spiner"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" /> </div>',
    link: function (scope, elm, attrs) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0
      }

      scope.$watch(scope.isLoading, function (v) {
        if (v) {
          elm.show()
        } else {
          elm.hide()
        }
      })
    }
  }
}])
app.controller('loadingIndicatorCtrl', function ($scope, $http) {
  $scope.loadData = function () {
    $http.jsonp('http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&delay=5&fname={firstName}&lname={lastName}')
      .success(function (data) {
        $scope.developers = data
      })
  }
})
