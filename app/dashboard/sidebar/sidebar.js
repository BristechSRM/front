module.exports = function (module) {
    module.directive("sidebar", sidebar);

    function sidebar() {
        var directive = {
            scope: {
                excludedStatusesList: "="
            },
            templateUrl: "dashboard/sidebar/sidebar.html",
            link: function(scope, elem, attrs) {
                scope.isSelected = function(status) {
                    return !this.excludedStatusesList.hasStatus(status);
                };
                scope.toggleSelected = function(status) {
                    var wasExcluded = scope.excludedStatusesList.hasStatus(status);
                    if (wasExcluded) {
                        scope.excludedStatusesList.removeStatus(status);
                    } else {
                        scope.excludedStatusesList.addStatus(status);
                    }
                };
            }
        };
        return directive;
    }
};
