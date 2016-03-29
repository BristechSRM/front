module.exports = function(module) {
    module.factory("speakerService", speakerService);

    speakerService.$inject = ["$http", "BACKEND"];
    function speakerService($http, BACKEND) {
        var service = {
            getSpeakers : getSpeakers
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.speakersPort;
        var speakersUrl = apiBaseUrl + '/talkoutlines';
        var speakers = [];

        function getSpeakers() {
            return $http.get(speakersUrl).then(function(result) {
                return result.data;
            });
        }

        return service;
    }

};
