require('../config/backend.js');

(function() {
    angular.module("BristechSRM").factory("speakerService", speakerService);
    function speakerService($http, $q, backend) {
        var service = {
            getSpeakers : getSpeakers
        };
        var apiBaseUrl = backend.url + ':' + backend.port;  + '/api';
        var speakersUrl = apiBaseUrl + '/speakers';
        var speakers = [];

        function getSpeakers() {
            return $http.get(speakersUrl).then(function(result){
                return result.data;
            });
        }

        return service;
    }

})();
