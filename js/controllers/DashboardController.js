require("../services/speakerService.js");
require("../directives/speakerCard.js");

(function () {
    angular.module("BristechSRM").controller("DashboardController",["speakerService", DashboardController]);

    function DashboardController(speakerService) {
        var vm = this;
        speakerService.getSpeakers().then(function (data){
            vm.speakers = data;
        });
    }
})();
