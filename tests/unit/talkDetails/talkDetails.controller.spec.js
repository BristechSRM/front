describe('TalkDetailsController', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var talkOutline = {
        "talkId":1,
        "speakerName":"Thomas Hull",
        "speakerEmail":"test@email.com",
        "title":"To know javascript is to love javascript",
        "speakerRating":5,
        "adminName":"David Wybourn",
        "adminImageUrl":"https://placebear.com/50/50",
        "speakerLastContacted":"1970-01-01",
        "status":1
    };

    beforeEach(function() {
        angular.mock.module('BristechSRM', function($provide) {
            $provide.factory("talkOutlinesService", function($q) {
                var spy = jasmine.createSpy("getTalkOutline").and.callFake(function() {
                    return $q.resolve(talkOutline);
                });
                return {
                    getTalkOutline: spy
                }
            });
        });
    });

    var $controller;
    var $rootScope;
    var mockTalkOutlinesService;

    beforeEach(inject(function(_$controller_, _$rootScope_, _talkOutlinesService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        mockTalkOutlinesService = _talkOutlinesService_;
    }));

    it("gets talk outline on instantiation", function() {
        var controller = createController({});
        expect(mockTalkOutlinesService.getTalkOutline).toHaveBeenCalledWith(1);
    });

    it("sets talk on instantiation", function() {
        var controller = createController({});
        expect(controller.talk).toEqual({
            title: "To know javascript is to love javascript",
            status: 1
        });
    });

    it("sets admin on instantiation", function() {
        var controller = createController({});
        expect(controller.admin).toEqual({
            name: "David Wybourn"
        });
    });

    it("sets speaker on instantiation", function() {
        var controller = createController({});
        expect(controller.speaker).toEqual({
            name: "Thomas Hull",
            email: "test@email.com",
            rating: 5
        });
    });

    function createController(scope) {
        var controller = $controller("TalkDetailsController", { $scope: scope, $routeParams: {talkId: 1} });
        $rootScope.$digest();
        return controller;
    }
});
