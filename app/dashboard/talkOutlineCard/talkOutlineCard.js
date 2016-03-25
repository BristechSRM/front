module.exports = function (module) {
    module.directive("talkOutlineCard", talkOutlineCard);

	function talkOutlineCard() {
    var directive = {
        scope : {
          talkOutline: "="
        },
        templateUrl: "dashboard/talkOutlineCard/talkOutlineCard.html",
        link: link
    };
    return directive;

    function link(scope, elem, attrs) {
        var statusClasses = ["unassigned", "assigned", "in-progress",
            "deferred", "topic-approved", "date-assigned"];
        scope.statusToCssClass = function(status) {
            var statusClass = statusClasses[status];
            return statusClass || statusClasses[0];
        };
    }
	}
};
