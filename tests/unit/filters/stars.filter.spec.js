describe('starsFilter', function() {

    beforeEach(angular.mock.module('BristechSRM'));

    var starsFilter;

    beforeEach(inject(function(_$filter_) {
        starsFilter = _$filter_("stars");
    }))

    it("returns empty string with 0", function() {
        expect(starsFilter(0)).toBe("");
    });

    it("returns specified number of stars", function() {
        expect(starsFilter(3)).toBe("★★★");
    });
});
