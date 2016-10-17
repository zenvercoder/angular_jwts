* `mkdir angular_jwts`

* `cd angular_jwts`

* `git init`

* `express --git`

* `npm i`

<!-- all angular stuff will go in public-->

* `cd public`

* `touch index.html`

* `echo .idea/ >> ../.gitignore`

* test what we have so far, open up index.html in browser. 

* next, bring in Angular (there are other ways besides using CDN) for Angular, bring it in at the beginning b/c the entire app needs angular`<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>`

* `ng-app` in html tag

* test to see if Angular is working `<h1>{{1+4}}</h1>` in index.html. open in browser
 
* need angular route`"//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route.js"
` (there is no version X.Y.Z, need to change to the current version

* reset ng-app to `ng-app="angularJWT"`

* make a new app.js in public folder. This is Angular's app.js, not express's app.js. we are now writing front end and back end code in the same respository.

* everything in the public folder will be executed on the browser... client side.

* in public/app.js `angular.module('angularJWT', ['ngRoute'])`

* index.html, another script tag. serving a file from the server. `<script src="./app.js"></script>` recheck index.html in browser. Open up dev tools to make sure scripts are being called.

* github: make new repo, add files, commit, remote add origin, git push -u origin master