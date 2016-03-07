var angular = require("angular");
require("angular-route");

var module = angular.module("BristechSRM",["ngRoute"] );
require("./app.constants.js");
require("./app.routes.js");
require('./filters.js');
require("./dashboard/DashboardController.js");
require("./dashboard/speakerCard/speakerCard.js");
require("./services/speakerService.js");
