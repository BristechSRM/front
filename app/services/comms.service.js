module.exports = function(module) {
    module.factory("commsService", commsService);

    commsService.$inject = ["$http", "BACKEND", "$q"];
    function commsService($http, BACKEND, $q) {
        var service = {
            fetchLastContacted : fetchLastContacted,
            attachComms: attachComms
        };

        var apiBaseUrl = BACKEND.url + ':' + BACKEND.port;
        var speakerCommsUrl = "http://localhost:8080";
        var lastContactedUrl = speakerCommsUrl + "/last-contacted";
        var comms;

        return service;

        function fetchLastContacted() {
            return $http.get(lastContactedUrl).then(function(result) {
                comms = result.data;
                return comms;
            });
        }

        function attachComms(speakers) {
            if (comms === undefined) {
                return fetchLastContacted().then(function(comms) {
                    return attachComms(speakers);
                });
            } else {
                return $q(function(resolve, reject){
                    for(var i in speakers) {
                        var speaker = speakers[i];
                        speaker.lastContacted = comms[speaker.email] !== undefined? comms[speaker.email] : "unkown";
                    }    
                    resolve();
                })
                
            }
        }
    }

};
