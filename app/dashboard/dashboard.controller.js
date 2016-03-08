module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService'];
    function DashboardController(speakerService) {
        var vm = this;
        speakerService.getSpeakers().then(function (data){
            vm.speakers = data;
        });
        vm.excludedStates = [3,5];
        vm.masterFilterFunction = function(speaker){
            return stateFilter(speaker);
        };

        function stateFilter(speaker){
            return vm.excludedStates.every(function(state){
                return speaker.speakerStatus !== state;
            });
        }
    }
};
