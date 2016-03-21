module.exports = function(module) {
    module.factory("commsService", commsService);

    commsService.$inject = ["$http", "BACKEND"];
    function commsService($http, BACKEND) {
        var service = {
            getLastContacted : getLastContacted,
            hello : "Hello"
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.port;
        var speakerCommsUrl = "http://api.bris.tech:8080";
        var lastContactedUrl = speakerCommsUrl + "/last-contacted";
        var speakers = [];
        console.log(getLastContacted);
        console.log(service.hello)

        return service;

        function getLastContacted() {
            return $http.get(lastContactedUrl).then(function(result) {
                return result.data;
            });
        }
    }

};
