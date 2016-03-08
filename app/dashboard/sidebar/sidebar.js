module.exports = function (module) {
    module.directive("sidebar", sidebar);

    function sidebar() {
        var directive = {
            scope: {
                excludedStates: "="
            },
            templateUrl: "dashboard/sidebar/sidebar.html",
            link: function(scope, elem, attrs) {
                scope.isSelected = function(state) {
                    return scope.excludedStates.every(function(excludedState) {
                        return excludedState !== state;
                    });
                };
            }
        };
        return directive;
    }
};
