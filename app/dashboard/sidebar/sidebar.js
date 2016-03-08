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
                    var excluded = scope.isSelected(state);
                    if (excluded) {
                        scope.excludedStatesList.addState(state);
                    } else {
                        scope.excludedStatesList.removeState(state);
                    }
                };
            }
        };
        return directive;
    }
};
