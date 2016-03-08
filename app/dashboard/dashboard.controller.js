module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService'];
    function DashboardController(speakerService) {
        var vm = this;
        speakerService.getSpeakers().then(function (data){
            vm.speakers = data;
        });
        vm.excludedStates = [];
        vm.masterFilterFunction = function(speaker){
            return stateFilter(speaker);
        };

        function stateFilter(speaker){
            return excludedStates.every(function(state){
                return speaker.speakerStatus !== state;
            });
        }
    }
};
