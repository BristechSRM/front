module.exports = function(module) {
    module.factory("speakerCommsService", speakerCommsService);

    speakerCommsService.$inject = ["$http", "BACKEND"];
    function speakerCommsService($http, BACKEND) {
        var service = {
            getLastContacted : getLastContacted
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.port;
        var speakerCommsUrl = "http://api.bris.tech:8080";
        var lastContactedUrl = speakerCommsUrl + "/last-contacted"
        var speakers = [];

        return service;

        function getLastContacted() {
            return $http.get(lastContactedUrl).then(function(result) {
                return result.data;
            }).error(function(err){
                return {};
            });
        }
    }

};
