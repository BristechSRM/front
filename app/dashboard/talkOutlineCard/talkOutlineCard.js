module.exports = function (module) {
    module.directive("talkOutlineCard", talkOutlineCard);

	function talkOutlineCard() {
        var directive = {
            scope : {
              talkOutline: "="
            },
            templateUrl: "dashboard/talkOutlineCard/talkOutlineCard.html"
        };
        return directive;
	}
};
