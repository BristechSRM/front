module.exports = function(module) {
    module.factory("speakerCommsService", speakerCommsService);

    speakerCommsService.$inject = ["$http", "BACKEND"];
    function speakerCommsService($http, BACKEND) {
        var service = {
            getLastContacted : getLastContacted
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.speakerCommsPort;
        var lastContactedUrl = apiBaseUrl + "/lastcontacted";

        function getLastContacted() {
            return $http.get(lastContactedUrl).then(function(result) {
                return result.data;
            });
        }

        return service;
    }
};
