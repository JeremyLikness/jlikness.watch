jlikness.watch
==============
![No longer maintained](https://img.shields.io/maintenance/no/2020)

A simple module to enable counting watches in your AngularJS app.

Include jlwatch.js in your app, then add a dependency like this: 

    angular.module('yourModule', ['jlikness.watch']);

In your HTML, place the jl-watch directive at the top element you want to count watches from. Usually this will be the same level as ng-app: 

    <body ng-app='yourModule' jl-watch=''>
    
To generate the watches, load the jlWatchService and call countWatches(). It will return the count as well as update the watchCount property.

    ['jlWatchService', function (ws) { var count = ws.countWatches(); }]
    
Refer to index.html for an example. [Click here](http://jeremylikness.github.io/jlikness.watch/) to run the example in your browser.
