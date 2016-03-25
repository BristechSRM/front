describe('talkStatusClassFilter', function() {

    beforeEach(angular.mock.module('BristechSRM'));

    var filter;

    beforeEach(inject(function(_$filter_) {
        filter = _$filter_("talkStatusClass");
    }))

    it("returns unassigned by default", function() {
        expect(filter()).toBe("unassigned");
    });

    it("converts 0 to unassigned", function() {
        expect(filter(0)).toBe("unassigned");
    });

    it("converts 1 to assigned", function() {
        expect(filter(1)).toBe("assigned");
    });

    it("converts 2 to in-progress", function() {
        expect(filter(2)).toBe("in-progress");
    });

    it("converts 3 to deferred", function() {
        expect(filter(3)).toBe("deferred");
    });

    it("converts 4 to topic-approved", function() {
        expect(filter(4)).toBe("topic-approved");
    });

    it("converts 5 to date-assigned", function() {
        expect(filter(5)).toBe("date-assigned");
    });

    it("returns unassigned for unrecognised state", function() {
        expect(filter(6)).toBe("unassigned");
    });
});
