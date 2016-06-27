angular.module('starter.router', ["starter.controllers", "starter.services"])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "/templates/login.html",
            controller: "loginController"
        })
        .state("home", {
            url: "/home",
            templateUrl: "/templates/home.html",
            controller: "MapController"
        })
        .state("chat", {
            url: "/chat",
            templateUrl: "/templates/chat.html",
            controller: "chatController"
        })
        .state("create", {
            url: "/create",
            templateUrl: "/templates/create.html",
            controller: "createController"
        })
        .state("settings", {
            url: "/settings",
            templateUrl: "/templates/settings.html",
            controller: "settingsController"
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');


});