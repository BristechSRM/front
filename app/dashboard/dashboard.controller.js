module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService', 'commsService', 'StatusList', 'SortPreference'];
    function DashboardController(speakerService, commsService, StatusList, SortPreference) {
        var vm = this;
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
            if(vm.speakerComms !== undefined){
              mapSpeakerSpeakerComms(data, vm.speakerComms);
            }
        });

        commsService.getLastContacted().then(function (data) {
            vm.speakerComms = data;

            if(vm.speakers !== undefined) {
                mapSpeakerSpeakerComms(vm.speakers, data);
            }
        });

        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference("speakerRating", true);

        vm.masterFilterFunction = function(speaker) {
            return statusFilter(speaker);
        };

        function statusFilter(speaker) {
            return !vm.excludedStatusesList.hasStatus(speaker.status);
        }

        function mapSpeakerSpeakerComms(speakers, speakerComms) {
            for(var i in speakers) {
                var speaker = speakers[i];
                speaker.lastContacted = speakerComms[speaker.email] !== undefined? speakerComms[speaker.email] : "unkown";
            }
        }
    }
};
