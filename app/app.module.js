var angular = require("angular");
var ngRoute = require("angular-route");

var module = angular.module("BristechSRM",[ngRoute] );
require("./app.constants.js")(module);
require("./app.routes.js")(module);
require('./filters.js')(module);
require('./dashboard')(module);
require("./services/speaker.service.js")(module);
