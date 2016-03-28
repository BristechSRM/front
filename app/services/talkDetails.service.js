module.exports = function(module) {
    module.factory("talkDetailsService", talkDetailsService);

    talkDetailsService.$inject = ["$q"];
    function talkDetailsService($q) {
        var service = {
            getTalkDetails : getTalkDetails
        };

        var talkDetails = {};
        talkDetails.data = {
            talk: {
                id:1,
                title: "To Know JavaScript Is To Love JavaScript",
                status: 5
            },
            speaker: {
                id: 1,
                name: "Thomas Hull",
                email: "thull@email.com",
                rating: 4
            },
            admin: {
                id: 2,
                name: "Chris Smith",
                email: "csmith@email.com",
                imageUrl: "https://placebear.com/50/50"
            }
        };

        function getTalkDetails(talkId) {
            return $q.resolve(talkDetails);
        }

        return service;
    }

};
