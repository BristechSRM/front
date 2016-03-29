describe('DashboardController', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var talkOutlines = [
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
            $provide.factory("talkOutlinesService", function($q) {
                var spy = jasmine.createSpy("getTalkOutlines").and.callFake(function() {
                    return $q.resolve(talkOutlines);
                });
                return {
                    getTalkOutlines: spy
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
    var $q;
    var mockTalkOutlinesService;
    var mockSpeakerCommsService;

    beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _talkOutlinesService_, _speakerCommsService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $q = _$q_;
        mockTalkOutlinesService = _talkOutlinesService_;
        mockSpeakerCommsService = _speakerCommsService_;
    }));

    it("gets talk outlines on instantiation", function() {
        var controller = createController({});
        expect(mockTalkOutlinesService.getTalkOutlines).toHaveBeenCalled();
    });

    it("sets talk outlines on instantiation", function() {
        var controller = createController({});
        expect(controller.talkOutlines).not.toBe(null);
    });

    it("gets last contacted date after talk outlines return", function() {
        mockSpeakerCommsService.getLastContacted.and.callFake(function() {
            expect(mockTalkOutlinesService.getTalkOutlines).toHaveBeenCalled();
            return $q.resolve(lastContacted);
        });
        var controller = createController({});
        expect(mockSpeakerCommsService.getLastContacted).toHaveBeenCalled();
    });

    it("does not get last contacted until talk outlines return", function() {
        mockTalkOutlinesService.getTalkOutlines.and.callFake(function() {
            expect(mockSpeakerCommsService.getLastContacted).not.toHaveBeenCalled();
            return $q.resolve(talkOutlines);
        });
        var controller = createController({});
        expect(mockTalkOutlinesService.getTalkOutlines).toHaveBeenCalled();
    });

    it("maps last contacted emails to talk outlines on instantiation", function() {
        var controller = createController({});
        expect(controller.talkOutlines[0].speakerLastContacted).toBe("2015-12-25");
        expect(controller.talkOutlines[1].speakerLastContacted).toBe("1989-11-09");
        expect(controller.talkOutlines[2].speakerLastContacted).toBe("2016-02-19");
        expect(controller.talkOutlines[4].speakerLastContacted).toBe("2016-01-10");
    });

    it("sets last contacted field if never contacted to null", function() {
        var controller = createController({});
        expect(controller.talkOutlines[3].speakerLastContacted).toBe(null);
    });

    it("includes all talk outlines by default", function() {
        var controller = createController({});
        expect(controller.excludedStatusesList.statuses.length).toEqual(0);
    });

    it("sorts talk outlines by rating in descending order by default", function() {
        var controller = createController({});
        expect(controller.sortPreference.key).toBe("speakerRating");
        expect(controller.sortPreference.isDesc).toBe(true);
    });

    it("filters out talk outlines with an excluded status", function() {
        var controller = createController({});
        controller.excludedStatusesList.addStatus(1);
        controller.excludedStatusesList.addStatus(3);
        controller.excludedStatusesList.addStatus(2);
        expect(controller.masterFilterFunction(talkOutlines[0])).toBe(false);
    });

    it("does not filter out talk outlines with an included status", function() {
        var controller = createController({});
        controller.excludedStatusesList.addStatus(1);
        controller.excludedStatusesList.addStatus(3);
        controller.excludedStatusesList.addStatus(2);
        expect(controller.masterFilterFunction(talkOutlines[2])).toBe(true);
    });

    function createController(scope) {
        var controller = $controller("DashboardController", { $scope: scope });
        $rootScope.$digest();
        return controller;
    }
});
