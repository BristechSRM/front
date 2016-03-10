describe('SortOption', function() {
    beforeEach(angular.mock.module('BristechSRM'));

    var SortOption;

    beforeEach(inject(function(_SortOption_) {
        SortOption = _SortOption_;
    }));

    it("sets key on creation", function() {
        var option = new SortOption("My key", "My label");
        expect(option.key).toEqual("My key");
    });

    it("sets label on creation", function() {
        var option = new SortOption("My key", "My label");
        expect(option.label).toEqual("My label");
    });
});
