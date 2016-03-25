var angular = require("angular");
var ngRoute = require("angular-route");

var module = angular.module("BristechSRM",[ngRoute] );
require("./app.constants.js")(module);
require("./app.routes.js")(module);
require('./filters')(module);
require('./dashboard')(module);
require('./models')(module);
require('./services')(module);
