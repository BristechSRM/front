module.exports = function (module) {
    module.controller("DashboardController", DashboardController);

    DashboardController.$inject = ['speakerService'];
    function DashboardController(speakerService) {
        var vm = this;
        speakerService.getSpeakers().then(function (data) {
            vm.speakers = data;
        });
        vm.excludedStatusesList = new StatusList();
        vm.sortPreference = new SortPreference('rating',true);

        vm.masterFilterFunction = function(speaker) {
            return statusFilter(speaker);
        };

        function statusFilter(speaker) {
            return !vm.excludedStatusesList.hasStatus(speaker.speakerStatus);
        }

        function SortPreference(key, isDesc){
            this.key =  key;
            this.isDesc = isDesc;
        }

        function StatusList() {
            this.statuses = [];
            this.removeStatus = function(statusToRemove) {
                this.statuses = this.statuses.filter(function(status) {
                    return status !== statusToRemove;
                });
            };
            this.addStatus = function(statusToAdd) {
                this.removeStatus(statusToAdd);
                this.statuses.push(statusToAdd);
            };
            this.hasStatus = function(statusToCheck) {
                return this.statuses.some(function(status) {
                    return status === statusToCheck;
                });
            };
        }
    }
};
