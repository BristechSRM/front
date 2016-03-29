module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['talkOutlinesService', 'speakerCommsService', 'StatusList', 'SortPreference', '$location'];
    function DashboardController(talkOutlinesService, speakerCommsService, StatusList, SortPreference, $location) {
        var vm = this;
        talkOutlinesService.getTalkOutlines().then(function (data) {
            //Early display
            vm.talkOutlines = data;

            speakerCommsService.getLastContacted().then(function (data) {
              vm.talkOutlines.forEach(function(talkOutline) {
                 talkOutline.speakerLastContacted = data[talkOutline.speakerEmail] || null;
              });
            });
        });

        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference("speakerRating", true);

        vm.masterFilterFunction = function(speaker) {
            return statusFilter(speaker);
        };

        vm.goToTalkDetails = function(talkId) {
            $location.path("/talk-details/" + talkId);
        };

        function statusFilter(speaker) {
            return !vm.excludedStatusesList.hasStatus(speaker.status);
        }
    }
};
