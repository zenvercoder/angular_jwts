angular.module('angularJWT', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    // $routeProvider is almost like router.get app.js in express. After index.html page is given back to browser from server, Angular breaks down... this is the domain, then it finds the routes it cares about
    $routeProvider
        .when('/', {
            // now we need to tell this where to go
            // make custom tag in index.html
            template: '<h1>Hello from angular route</h1>'
        })
});

// interesting concept: front end routing now