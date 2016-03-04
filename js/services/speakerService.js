require('../config/backend.js');

(function() {
    angular.module("BristechSRM").factory("speakerService", speakerService);
    function speakerService($http, $q, backend) {
        var service = {
            getSpeakers : getSpeakers
        };
        var apiBaseUrl = backend.url + ':' + backend.port;
        var speakersUrl = apiBaseUrl + '/speakers';
        var speakers = [];

        function getSpeakers() {
            var deferred = $q.defer();
            $http.get(speakersUrl).success(function(data){
                speakers = data;
                deferred.resolve(speakers);
            });
            return deferred.promise;
        }

        return service;
    }

})();
