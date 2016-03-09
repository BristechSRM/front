module.exports = function (module) {
    module.directive("sidebar", sidebar);

    function sidebar() {
        var directive = {
            scope: {
                excludedStatesList: "="
            },
            templateUrl: "dashboard/sidebar/sidebar.html",
            link: function(scope, elem, attrs) {
                scope.isSelected = function(state) {
                    return !this.excludedStatesList.hasState(state);
                };
                scope.toggleSelected = function(state) {
                    var wasExcluded = scope.excludedStatesList.hasState(state);
                    if (wasExcluded) {
                        scope.excludedStatesList.removeState(state);
                    } else {
                        scope.excludedStatesList.addState(state);
                    }
                };
            }
        };
        return directive;
    }
};
