require("../controllers/DashboardController.js");

(function (){
    angular.module("BristechSRM").config(["$routeProvider", router]);
    function router($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/dashboard"
            })
            .when("/dashboard", {
                templateUrl: "dashboard.html",
                controller: "DashboardController",
                controllerAs: "vm"
            });
    }
})();
