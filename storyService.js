var app = angular.module("madlibsModule");
var fullStory = "";
app.factory('storyService', function() {
  return {
    generateStory: generateStory,
    getStory: getStory
  }

  function generateStory(wordObject) {
    fullStory = "Once upon a time, " + wordObject.noun1 + " and " + wordObject.noun2 +
    " went fishing. It was a time when " + wordObject.adjective1 +
    " mermaids dominated the oceans, before sharks " + wordObject.adverb1 +
    " ate them all. " + wordObject.noun1 + " stood by the water, while " + wordObject.noun2 +
    " " + wordObject.verb1 + " under the water. " + " Suddenly, a " + wordObject.adjective1 +
    " mermaid lunged her " + wordObject.adjective2 + " spear into " + wordObject.noun1 +
    "'s heart. " + wordObject.noun1 + " was shooketh, but " + wordObject.noun1 + " was "
    + wordObject.adjective3 + ", so " + wordObject.noun2 + " was able to use a " + wordObject.noun3
    + " to save " + wordObject.noun1 + ". Unfortunately, more mermaids came, and they " +
    wordObject.adverb2 + " dragged " + wordObject.noun2 + " under the water with a " + wordObject.noun4
    + ". " + wordObject.noun2 + " was mad af that the mermaids injured " + wordObject.noun1 +
    " and ruined the fishing trip, but " + wordObject.noun2 +
    " knew that Karma keeps receipts, so the best thing to do is to remain calm. And that was the right choice, "
    + "because five minutes later, " + wordObject.noun5 + " sharks came to the crime scene and ate all the mermaids. " +
    wordObject.noun1 + " and " + wordObject.noun2 + " came out of the water alive. " + wordObject.noun1 + " said: " +
    "'Let's " + wordObject.verb2 + " and " + wordObject.verb3 + " on the beach instead. Fishing is kinda scary.' "
    + wordObject.noun2 + " replied, 'nah, I think I'll just stick with riding the Q-line from now on.' " +
    wordObject.noun1 + " and " + wordObject.noun2 + " lived happily ever after riding the Q-line everyday.";
  }

  function getStory() {
    return fullStory;
  }
});
