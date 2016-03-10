module.exports = function (module) {
    module.directive("sidebar", sidebar);

    sidebar.$inject = ['SortOption'];
    function sidebar(SortOption) {
        var directive = {
            scope: {
                excludedStatusesList: "=",
                sortPreference: "="
            },
            templateUrl: "dashboard/sidebar/sidebar.html",
            link: function(scope, elem, attrs) {
                scope.sortOptions = [
                    new SortOption("rating", "Rating"),
                    new SortOption("name", "Name")
                ];
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
