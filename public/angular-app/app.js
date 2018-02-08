// angular.module('app', ['ngRoute', 'angular-jwt']).config(config).run(run);
angular.module('app', ['ngRoute']).config(config);

// function config($routeProvider, $locationProvider, $httpProvider){
function config($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'angular-app/views/home.html',
            controller: HomeController,
            controllerAs: 'vm'
        }).
        when('/home', {
            templateUrl: 'angular-app/views/home.html',
            controller: HomeController,
            controllerAs: 'vm'
        }).
        when('/property', {
            templateUrl: 'angular-app/views/property.html',
            controller: PropertyController,
            controllerAs: 'vm'
        }).
        when('/buy', {
            templateUrl: 'angular-app/views/buy.html',
            controller: PropertyController,
            controllerAs: 'vm'
        }).
        when('/rent', {
            templateUrl: 'angular-app/views/rent.html',
            controller: PropertyController,
            controllerAs: 'vm'
        }).
        when('/about', {
            templateUrl: 'angular-app/views/about.html',
            controller: AboutController,
            controllerAs: 'vm'
        }).
        when('/contact', {
            templateUrl: 'angular-app/views/contact.html',
            controller: ContactController,
            controllerAs: 'vm'
        }).
        when('/upload', {
            templateUrl: 'angular-app/views/upload.html',
            controller: UploadController,
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo : '/'
        });

};

// function run($rootScope, $location, $window, AuthFactory) {
//     $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
//         if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
//             event.preventDefault();
//             $location.path('/');
//         }
//     });
// };