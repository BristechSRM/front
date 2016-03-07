(function () {
  angular.module("BristechSRM").directive("speakerCard", speakerCard);

	function speakerCard() {
		var directive = {
			scope : {
				speaker: "="
			},
			templateUrl: "speakerCard.html"
		};
		return directive;
	}
})();
