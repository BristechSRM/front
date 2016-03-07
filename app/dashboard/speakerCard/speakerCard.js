(function () {
  angular.module("BristechSRM").directive("speakerCard", speakerCard);

	function speakerCard() {
		var directive = {
			scope : {
				speaker: "="
			},
			templateUrl: "dashboard/speakerCard/speakerCard.html"
		};
		return directive;
	}
})();
