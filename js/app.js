var angular = require("angular");
require("angular-route");

var module = angular.module("BristechSRM",["ngRoute"] );
var router = require("./config/routing.js");
//module.config(["$routeProvider", router]);