module.exports = function (module) {
    module.directive("talkOutlineCard", talkOutlineCard);

	function talkOutlineCard() {
        var directive = {
            scope : {
              talkOutline: "="
            },
            templateUrl: "dashboard/talkOutlineCard/talk-outline-card.html"
        };
        return directive;
	}
};
