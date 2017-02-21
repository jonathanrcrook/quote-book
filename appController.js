angular.module('quoteBook').controller('appController', function($scope, mainService) {

  $scope.thisAppIsBroken = "This app is working"
  $scope.quotes = mainService.getQuotes()
  $scope.addData = function(quote) {
    mainService.addData(quote)
  }

  $scope.removeData = function(str) {
    mainService.removeData(str);
  }

})
