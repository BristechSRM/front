module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService', 'speakerCommsService', 'StatusList', 'SortPreference'];
    function DashboardController(speakerService, speakerCommsService, StatusList, SortPreference) {
        var vm = this;
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
            speakerCommsService.getLastContacted().then(function (data) {
              vm.speakers = vm.speakers.map(function(speaker) {
                 speaker.speakerLastContacted = data[speaker.speakerEmail] || null;
                 return speaker;
              });
            });
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
