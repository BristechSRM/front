module.exports = function(module) {
    module.factory("speakerCommsService", speakerCommsService);

    speakerCommsService.$inject = ["$q","$http"];
    function speakerCommsService($q, $http) {
        var service = {
            getLastContacted : getLastContacted
        };

        function getLastContacted() {
          var deferred = $q.defer();

          deferred.resolve({
            "bob.builder@cartoonconstructionslimited.tv": "2004-01-30T05:00:01Z",
            "chris.smith@leaddeveloper.com": "2016-02-17T15:51:15Z",
            "david.wybourn@superawesomegoodcode.co.uk": "2016-03-07T12:45:04Z"            
          });

          return deferred.promise;
        }

        //function getLastContacted() {
          //  var url = 'http://api.bris.tech:8080/last-contacted';
            //return $http.get(url).then(function(result) {
            //    return result.data;
            //});
        //}

        return service;
    }
};
