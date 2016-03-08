module.exports = function (module) {
    module.directive("speakerCard", speakerCard);

	function speakerCard() {
        var directive = {
            scope : {
                speaker: "="
            },
			templateUrl: "dashboard/speakerCard/speakerCard.html",
            link: function(scope, elem, attrs) {
                var statusClasses = ["unassigned", "assigned", "in-progress",
                    "deferred", "topic-approved", "date-assigned"];
                scope.statusToCssClass = function(status) {
                    var statusClass = statusClasses[status];
                    return statusClass || statusClasses[0];
                };
            }
        };
		return directive;
	}
};
