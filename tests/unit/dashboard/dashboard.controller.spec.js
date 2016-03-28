describe('DashboardController', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var speakers = [
        {
            "talkId":1,
            "speakerName":"Thomas Hull",
            "speakerEmail": "test1@email.com",
            "title":"To know JavaScript is to love JavaScript",
            "speakerRating":5,
            "adminName":"David Wybourn",
            "adminImageUrl":"https://placebear.com/50/50",
            "status":1
        },
        {
            "talkId":2,
            "speakerName":"Jason Ebbin",
            "speakerEmail": "test2@email.com",
            "title":"How dull is F#",
            "speakerRating":3,
            "adminName":"Jason Ebbin",
            "adminImageUrl":"https://placebear.com/50/50",
            "status":3
        },
        {
            "talkId":3,
            "speakerName":"David Wybourn",
            "speakerEmail": "test3@email.com",
            "title":"Concourse: Where I met myself",
            "speakerRating":5,
            "adminName":"Chris James Smith",
            "adminImageUrl":"https://placebear.com/50/50",
            "status":4
        },
        {
            "talkId":4,
            "speakerName":"Joe Bloggs",
            "speakerEmail": "test4@email.com",
            "title":"",
            "speakerRating":0,
            "adminName":"Thomas Hull",
            "adminImageUrl":"https://placebear.com/50/50",
            "status":2
        },
        {
            "talkId":5,
            "speakerName":"Chris Smith",
            "speakerEmail": "test5@email.com",
            "title":"C# or F#: Which is sharper?",
            "speakerRating":4,
            "adminName":"Thomas Hull",
            "adminImageUrl":"https://placebear.com/50/50",
            "status":5
        }
    ];

    var lastContacted = {
        "test1@email.com": "2015-12-25",
        "test2@email.com": "1989-11-09",
        "test5@email.com": "2016-01-10",
        "test3@email.com": "2016-02-19"
    };

    beforeEach(function() {
        angular.mock.module('BristechSRM', function($provide) {
            $provide.factory("speakerService", function($q) {
                var spy = jasmine.createSpy("getSpeakers").and.callFake(function() {
                    return $q.resolve(speakers);
                });
                return {
                    getSpeakers: spy
                }
            });

            $provide.factory("speakerCommsService", function($q) {
                var spy = jasmine.createSpy("getLastContacted").and.callFake(function() {
                    return $q.resolve(lastContacted);
                });
                return {
                    getLastContacted: spy
                }
            });
        });
    });

    var $controller;
    var $rootScope;
    var mockSpeakerService;

    beforeEach(inject(function(_$controller_, _$rootScope_, _speakerService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        mockSpeakerService = _speakerService_;
    }));

    it("gets speakers on instantiation", function() {
        var controller = createController({});
        expect(mockSpeakerService.getSpeakers).toHaveBeenCalled();
    });

    it("sets speakers on instantiation", function() {
        var controller = createController({});
        expect(controller.speakers).not.toBe(null);
    });

    it("maps last contacted emails to speakers on instantiation", function() {
        var controller = createController({});
        expect(controller.speakers[0].speakerLastContacted).toBe("2015-12-25");
        expect(controller.speakers[1].speakerLastContacted).toBe("1989-11-09");
        expect(controller.speakers[2].speakerLastContacted).toBe("2016-02-19");
        expect(controller.speakers[4].speakerLastContacted).toBe("2016-01-10");
    });

    it("sets last contacted field if never contacted to null", function() {
        var controller = createController({});
        expect(controller.speakers[3].speakerLastContacted).toBe(null);
    });

    it("all speakers included by default", function() {
        var controller = createController({});
        expect(controller.excludedStatusesList.statuses.length).toEqual(0);
    });

    it("speakers sorted by rating in descending order by default", function() {
        var controller = createController({});
        expect(controller.sortPreference.key).toBe("speakerRating");
        expect(controller.sortPreference.isDesc).toBe(true);
    });

    it("speakers with excluded status filtered out", function() {
        var controller = createController({});
        controller.excludedStatusesList.addStatus(1);
        controller.excludedStatusesList.addStatus(3);
        controller.excludedStatusesList.addStatus(2);
        expect(controller.masterFilterFunction(speakers[0])).toBe(false);
    });

    it("speakers with included status not filtered out", function() {
        var controller = createController({});
        controller.excludedStatusesList.addStatus(1);
        controller.excludedStatusesList.addStatus(3);
        controller.excludedStatusesList.addStatus(2);
        expect(controller.masterFilterFunction(speakers[2])).toBe(true);
    });

    function createController(scope) {
        var controller = $controller("DashboardController", { $scope: scope });
        $rootScope.$digest();
        return controller;
    }
});
