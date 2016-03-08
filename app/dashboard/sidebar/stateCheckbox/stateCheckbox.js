module.exports = function (module) {
    module.directive("stateCheckbox", stateCheckbox);

    function stateCheckbox() {
        var directive = {
            scope: {
                class: "@",
                label: "@",
                checked: "="
            },
            templateUrl: "dashboard/sidebar/stateCheckbox/stateCheckbox.html"
        };
        return directive;
    }
};
