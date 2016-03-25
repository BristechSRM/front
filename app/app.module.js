var angular = require("angular");
var ngRoute = require("angular-route");
var ngSanitize = require("angular-sanitize");

var module = angular.module("BristechSRM",[ngRoute, ngSanitize] );
require("./app.constants.js")(module);
require("./app.routes.js")(module);
require('./filters')(module);
require('./dashboard')(module);
require('./talkDetails')(module);
require('./models')(module);
require('./services')(module);
