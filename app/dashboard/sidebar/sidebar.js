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
                scope.toggleSelected = function(state) {
                    var checked = scope.isSelected(state);
                    if (!checked) {
                        scope.excludedStates = scope.excludedStates.filter(function(excludedState) {
                            return excludedState !== state;
                        });
                    } else {
                        scope.excludedStates.push(state);
                    }
                };
            }
        };
        return directive;
    }
};
