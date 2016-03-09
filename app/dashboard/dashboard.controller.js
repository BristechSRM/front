module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService', 'StatusList'];
    function DashboardController(speakerService, StatusList) {
        var vm = this;
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
        });

        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference("rating", true);

        vm.masterFilterFunction = function(speaker) {
            return statusFilter(speaker);
        };

        function statusFilter(speaker) {
            return !vm.excludedStatusesList.hasStatus(speaker.speakerStatus);
        }

        function SortPreference(key, isDesc) {
            this.key =  key;
            this.isDesc = isDesc;
        }
    }
};
