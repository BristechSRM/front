var angular = require("angular");
require("angular-route");

var module = angular.module("BristechSRM",["ngRoute"] );
require("./config/routing.js");
require("./config/backend.js");
require("./services/speakerService.js");
require("./directives/speakerCard.js");
require('./filters/filters.js');
