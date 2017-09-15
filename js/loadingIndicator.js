'use strict'

var app = angular.module('loadingIndicatorApp', [])
app.controller('loadingIndicatorCtrl', function ($scope, $http) {
  $scope.loadData = function () {
    $scope.loading = true
    $http.jsonp('http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&delay=5&fname={firstName}&lname={lastName}')
      .success(function (data) {
        $scope.developers = data
        $scope.loading = false
      })
  }
})
