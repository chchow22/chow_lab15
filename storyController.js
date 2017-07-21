var app = angular.module("madlibsModule");
app.controller("storyController", function($scope, storyService) {
  $scope.fullStory = storyService.getStory();
});
