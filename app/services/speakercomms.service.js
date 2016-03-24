module.exports = function(module) {
    module.factory("speakerCommsService", speakerCommsService);

    speakerCommsService.$inject = ["$q","$http"];
    function speakerCommsService($q, $http) {
        var service = {
            getLastContacted : getLastContacted
        };

        function getLastContacted() {
            var url = 'http://api.bris.tech:8080/last-contacted';
            return $http.get(url).then(function(result) {
                return result.data;
            });
        }

        return service;
    }
};
