module.exports = function (module) {
    module.directive("sidebar", sidebar);

    function sidebar() {
        var directive = {
            templateUrl: "dashboard/sidebar/sidebar.html"
        };
        return directive;
    }
};
