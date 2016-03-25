module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['talkOutlinesService', 'speakerCommsService', 'StatusList', 'SortPreference'];
    function DashboardController(talkOutlinesService, speakerCommsService, StatusList, SortPreference) {
        var vm = this;
        talkOutlinesService.getTalkOutlines().then(function (data) {
            vm.talkOutlines = data;
            speakerCommsService.getLastContacted().then(function (data) {
              vm.talkOutlines = vm.talkOutlines.map(function(talkOutline) {
                 talkOutline.speakerLastContacted = data[talkOutline.speakerEmail];
                 return talkOutline;
              });
            });
        });

        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference("speakerRating", true);

        vm.masterFilterFunction = function(talkOutline) {
            return statusFilter(talkOutline);
        };

        function statusFilter(talkOutline) {
            return !vm.excludedStatusesList.hasStatus(talkOutline.status);
        }
    }
};
