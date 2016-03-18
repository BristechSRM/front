module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService', 'speakerCommsService', 'StatusList', 'SortPreference'];
    function DashboardController(speakerService, StatusList, SortPreference) {
        var vm = this;
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
            if(vm.speakerComms !== undefined){
              mapSpeakerSpeakerComms(data, vm.speakerComms)
            }
        });

        speakerCommsService.getSpeakers().then(function (data) {
            vm.speakerComms = data;

            if(vm.speakers !== undefined) {
                mapSpeakerSpeakerComms(vm.speakers, data);
            }
        });

        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference("rating", true);

        vm.masterFilterFunction = function(speaker) {
            return statusFilter(speaker);
        };

        function statusFilter(speaker) {
            return !vm.excludedStatusesList.hasStatus(speaker.speakerStatus);
        }

        function mapSpeakerSpeakerComms(speakers, speakerComms) {
            for(var speaker of speakers) {
                speaker.lastContacted = speakerComms[speaker.email] !== undefined? speakerComms[speaker.email] : "unkown";
            }
        }
    }
};
