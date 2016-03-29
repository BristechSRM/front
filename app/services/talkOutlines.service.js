module.exports = function(module) {
    module.factory("talkOutlinesService", talkOutlinesService);

    talkOutlinesService.$inject = ["$http", "BACKEND"];
    function talkOutlinesService($http, BACKEND) {
        var service = {
            getTalkOutlines: getTalkOutlines,
            getTalkOutline: getTalkOutline
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.speakersPort;
        var talkOutlinesUrl = apiBaseUrl + '/talkoutlines';

        function getTalkOutlines() {
            return $http.get(talkOutlinesUrl).then(function(result) {
                return result.data;
            });
        }

        function getTalkOutline(id) {
            return $http.get(talkOutlinesUrl + "/" + id).then(function(result) {
                return result.data;
            });
        }

        return service;
    }

};
