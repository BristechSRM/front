module.exports = function (module) {
    module.directive("talkDetailsSidebar", talkDetailsSidebar);

    talkDetailsSidebar.$inject = [];
    function talkDetailsSidebar() {
        var directive = {
            scope: {
                speaker: "=",
                talk: "=",
                admin: "="
            },
            templateUrl: "talkDetails/talkDetailsSidebar/talk-details-sidebar.html"
        };
        return directive;
    }
};
