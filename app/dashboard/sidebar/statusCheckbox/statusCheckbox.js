module.exports = function (module) {
    module.directive("statusCheckbox", statusCheckbox);

    function statusCheckbox() {
        var directive = {
            scope: {
                class: "@",
                label: "@",
                checked: "="
            },
            templateUrl: "dashboard/sidebar/statusCheckbox/statusCheckbox.html"
        };
        return directive;
    }
};
