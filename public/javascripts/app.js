// Initialize Firebase
var config = {
    apiKey: "AIzaSyCPIWmY3Oz6MjeSMyxaO30eZyzkx-XCT10",
    authDomain: "vinylist-c1c4b.firebaseapp.com",
    databaseURL: "https://vinylist-c1c4b.firebaseio.com",
    storageBucket: "vinylist-c1c4b.appspot.com",
    messagingSenderId: "240783340058"
};

firebase.initializeApp(config);

angular.module('vinylApp', ['firebase', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'VinylCtrl',
                controllerAs: 'ctrl'
            })
            .when('/about', {
                templateUrl: 'about.html'
            })
            .when('/contact', {
                templateUrl: 'contact.html'
            })
            .otherwise({
                templateUrl: '404.html'
            });
    $locationProvider.html5Mode(true);
});
