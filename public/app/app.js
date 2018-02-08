angular.module('app', ['ngRoute']).config(config);

function config($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'app/views/home.html',
            controller: HomeController,
            controllerAs: 'vm'
        }).
        when('/home', {
            templateUrl: 'app/views/home.html',
            controller: HomeController,
            controllerAs: 'vm'
        }).
        when('/property', {
            templateUrl: 'app/views/property.html',
            controller: PropertyController,
            controllerAs: 'vm'
        }).
        when('/buy', {
            templateUrl: 'app/views/buy.html',
            controller: PropertyController,
            controllerAs: 'vm'
        }).
        when('/rent', {
            templateUrl: 'app/views/rent.html',
            controller: PropertyController,
            controllerAs: 'vm'
        }).
        when('/about', {
            templateUrl: 'app/views/about.html',
            controller: AboutController,
            controllerAs: 'vm'
        }).
        when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: ContactController,
            controllerAs: 'vm'
        }).
        when('/upload', {
            templateUrl: 'app/views/upload.html',
            controller: UploadController
        }).
        otherwise({
            redirectTo : '/'
        });

};