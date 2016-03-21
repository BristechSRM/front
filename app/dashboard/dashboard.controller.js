module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService', 'commsService', 'StatusList', 'SortPreference'];
    function DashboardController(speakerService, commsService, StatusList, SortPreference) {
        var vm = this;

        commsService.fetchLastContacted();
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
            commsService.attachComms(vm.speakers);
        });

        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference("speakerRating", true);

        vm.masterFilterFunction = function(speaker) {
            return statusFilter(speaker);
        };

        function statusFilter(speaker) {
            return !vm.excludedStatusesList.hasStatus(speaker.status);
        }
    }
};
