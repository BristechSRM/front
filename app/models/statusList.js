module.exports = function (module) {
    module.factory("StatusList", statusList);

    function statusList() {
        function StatusList() {
            this.statuses = [];
        }

        StatusList.prototype = {
            removeStatus: function(statusToRemove) {
                this.statuses = this.statuses.filter(function(status) {
                    return status !== statusToRemove;
                });
            },
            addStatus: function(statusToAdd) {
                this.removeStatus(statusToAdd);
                this.statuses.push(statusToAdd);
            },
            hasStatus: function(statusToCheck) {
                return this.statuses.some(function(status) {
                    return status === statusToCheck;
                });
            }
        };

        return StatusList;
    }
};
