var app = angular.module("madlibsModule");

app.controller("formController", function($scope, storyService) {
  $scope.makeStory = function(noun1, noun2, noun3, noun4, noun5, verb1, verb2, verb3, verb4,
  adjective1, adjective2, adjective3, adjective4, adverb1, adverb2) {
    var words = {
      noun1: noun1,
      noun2: noun2,
      noun3: noun3,
      noun4: noun4,
      noun5: noun5,
      verb1: verb1,
      verb2: verb2,
      verb2: verb2,
      verb2: verb2,
      adjective1: adjective1,
      adjective2: adjective2,
      adjective3: adjective3,
      adjective4: adjective4,
      adverb1: adverb1,
      adverb2: adverb2
    };
    storyService.generateStory(words);
  }

});
