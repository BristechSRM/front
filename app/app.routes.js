module.exports = function (module) {
    module.config(["$routeProvider", router]);
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
