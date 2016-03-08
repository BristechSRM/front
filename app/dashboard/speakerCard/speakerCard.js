module.exports = function (module) {
  module.directive("speakerCard", speakerCard);

	function speakerCard() {
		var directive = {
			scope : {
				speaker: "="
			},
			templateUrl: "dashboard/speakerCard/speakerCard.html"
		};
		return directive;
	}
};
