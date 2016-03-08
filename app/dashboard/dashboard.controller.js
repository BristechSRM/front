module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService'];
    function DashboardController(speakerService) {
        var vm = this;
        speakerService.getSpeakers().then(function (data){
            vm.speakers = data;
        });
    }
};
