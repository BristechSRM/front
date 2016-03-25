module.exports = function (module) {
    module.directive("correspondenceCard", correspondenceCard);

    correspondenceCard.$inject = [];
    function correspondenceCard() {
        var directive = {
            scope: {
                correspondence: "="
            },
            templateUrl: "talkDetails/correspondenceCard/correspondenceCard.html"
        };
        return directive;
    }
};
