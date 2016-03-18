describe('DashboardController', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var speakers = [
        {
            "name":"Thomas Hull",
            "title":"To know javascript is to love javascript",
            "rating":5,
            "admin":"David Wybourn",
            "adminImageUrl":"https://placebear.com/50/50",
            "lastContacted":"1970-01-01",
            "speakerStatus":1
        },
        {
            "name":"Jason Ebbin",
            "title":"How dull is F#",
            "rating":3,"admin":"Jason Ebbin",
            "adminImageUrl":"https://placebear.com/50/50",
            "lastContacted":"1989-11-09",
            "speakerStatus":3
        },
        {
            "name":"David Wybourn",
            "title":"Concourse: Where I met myself",
            "rating":5,
            "admin":"Chris James Smith",
            "adminImageUrl":"https://placebear.com/50/50",
            "lastContacted":"2015-10-21",
            "speakerStatus":4
        },
        {
            "name":"Joe Bloggs",
            "title":"",
            "rating":0,
            "admin":"Thomas Hull",
            "adminImageUrl":"https://placebear.com/50/50",
            "lastContacted":"2016-02-19",
            "speakerStatus":2
        },
        {
            "name":"Chris Smith",
            "title":"C# or F#: Which is sharper?",
            "rating":4,
            "admin":"Thomas Hull",
            "adminImageUrl":"https://placebear.com/50/50",
            "lastContacted":"2016-01-10",
            "speakerStatus":5
        }
    ];

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
        expect(controller.speakers).toBe(speakers);
    });

    it("all speakers included by default", function() {
        var controller = createController({});
        expect(controller.excludedStatusesList.statuses.length).toEqual(0);
    });

    it("speakers sorted by rating in descending order by default", function() {
        var controller = createController({});
        expect(controller.sortPreference.key).toBe("rating");
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
