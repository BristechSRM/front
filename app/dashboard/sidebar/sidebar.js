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
            link: link
        };
        return directive;

        function link(scope, elem, attrs) {
            scope.sortOptions = [
                new SortOption("rating", "Rating"),
                new SortOption("name", "Name")
            ];
            scope.isIncluded = function(status) {
                return !this.excludedStatusesList.hasStatus(status);
            };
            scope.toggleIncluded = function(status) {
                var wasExcluded = scope.excludedStatusesList.hasStatus(status);
                if (wasExcluded) {
                    scope.excludedStatusesList.removeStatus(status);
                } else {
                    scope.excludedStatusesList.addStatus(status);
                }
            };
        }
    }
};
