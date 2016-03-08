module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService'];
    function DashboardController(speakerService) {
        var vm = this;
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
        });
        vm.excludedStatesList = new StatesList([]);

        vm.masterFilterFunction = function(speaker) {
            return stateFilter(speaker);
        };

        function stateFilter(speaker) {
            return vm.excludedStatesList.states.every(function(state){
                return speaker.speakerStatus !== state;
            });
        }

        function StatesList(states) {
            this.states = states;
            this.removeState = function(stateToRemove) {
                this.states = this.states.filter(function(state) {
                    return state !== stateToRemove;
                });
            };
            this.addState = function(stateToAdd) {
                this.removeState(stateToAdd);
                this.states.push(stateToAdd);
            };
            this.hasState = function(stateToCheck) {
                return this.states.some(function(state) {
                    return state === stateToCheck;
                });
            };
        }
    }
};
