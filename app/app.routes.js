module.exports = function (module) {
    module.config(router);

    router.$inject = ["$routeProvider"];
    function router($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/dashboard"
            })
            .when("/dashboard", {
                templateUrl: "dashboard/dashboard.html",
                controller: "DashboardController",
                controllerAs: "vm"
            });
    }
};