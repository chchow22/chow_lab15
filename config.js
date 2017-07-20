var app = angular.module("madlibsModule");

app.config(function($routeProvider) {
  $routeProvider

  .when("/form", {
    controller: "formController",
    templateUrl: "form.html"
  })

  .when("/story", {
    controller: "storyController",
    templateUrl: "story.html"
  })

  .otherwise({
    redirectTo: '/form'
  });
});
