var angular = require("angular");
require("angular-route");

var module = angular.module("BristechSRM",["ngRoute"] );
require("./app.routes.js");
require("./app.constants.js");
require("./services/speakerService.js");
require("./directives/speakerCard.js");
require('./filters/filters.js');
require("./controllers/DashboardController.js");
