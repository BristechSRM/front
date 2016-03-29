module.exports = function (module) {
    module.controller("TalkDetailsController", TalkDetailsController);

    TalkDetailsController.$inject = ["talkOutlinesService", "$routeParams"];
    function TalkDetailsController(talkOutlinesService, $routeParams) {
        var vm = this;
        var talkId = $routeParams.talkId;

        talkOutlinesService.getTalkOutline(talkId).then(function(result) {
            vm.speaker = {
                name: result.speakerName,
                rating: result.speakerRating,
                email: result.speakerEmail
            };
            vm.admin = {
                name: result.adminName
            };
            vm.talk = {
                title: result.title,
                status: result.status
            };
        });

        vm.correspondences = [
            {
                date: "2016-02-06T15:16:54Z",
                from: "chris.smith@leaddeveloper.com",
                to: "david.wybourn@superawesomecode.com",
                message: "<p>Hi David</p><p>Would you like to do a presentation on docker and concourse?</p><p>Thanks</p><p>Chris</p>"
            },
            {
                date: "2016-02-07T09:45:21Z",
                from: "david.wybourn@superawesomecode.com",
                to: "chris.smith@leaddeveloper.com",
                message: "<p>Hi Chris</p><p>I've never used docker or concourse though, won't that be an issue?</p><p>David</p>"
            },
            {
                date: "2016-02-08T14:30:00Z",
                from: "chris.smith@leaddeveloper.com",
                to: "david.wybourn@superawesomecode.com",
                message: "<p>That shouldn't be an issue. I hear that you can master both topics in a matter of hours.</p>"
            }
        ];
    }
};
