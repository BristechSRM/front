module.exports = function (module) {
    module.directive("filterOption", filterOption);

	function filterOption() {
        var directive = {
            scope: {
                class: "@",
                label: "@"
            },
            templateUrl: "dashboard/sidebar/filterOption/filterOption.html"
        };
		return directive;
	}
};
