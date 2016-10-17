angular.module('angularJWT', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    // $routeProvider is almost like router.get app.js in express. After index.html page is given back to browser from server, Angular breaks down... this is the domain, then it finds the routes it cares about
    $routeProvider
        .when('/', {
            // now we need to tell this where to go
            // make custom tag in index.html
            templateURL: '/login/login.template.html',
            controller: 'login'
        })
});

// interesting concept: front end routing now

// checks forng-app (angularJWT),
// checks for ngRoute
// ng-route ignores the domain, then it sees '/' and checks configuration "do you match slash? let me see if you have a template set up. Oh, you do." It comes back and injects it

// writing a whole login form would be a nightmare. instead, give it a URL.

// change template: '<h1>Hello from angular route</h1>'
// to templateURL: '/login/login.template.html'

// make login.html

// make controller under template instead of:
// controller: function($scope){
//     $scope.test = 'I am working'
// }