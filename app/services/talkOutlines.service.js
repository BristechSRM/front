module.exports = function(module) {
    module.factory("talkOutlinesService", talkOutlinesService);

    talkOutlinesService.$inject = ["$http", "BACKEND"];
    function talkOutlinesService($http, BACKEND) {
        var service = {
            getTalkOutlines : getTalkOutlines
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.port;
        var talkOutlinesUrl = apiBaseUrl + '/talkoutlines';

        function getTalkOutlines() {
            return $http.get(talkOutlinesUrl).then(function(result) {
                return result.data;
            });
        }

        return service;
    }

};
