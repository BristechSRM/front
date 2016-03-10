describe('SortOption', function() {
    beforeEach(angular.mock.module('BristechSRM'));

    var SortPreference;

    beforeEach(inject(function(_SortPreference_) {
        SortPreference = _SortPreference_;
    }));

    it("sets key on creation", function() {
        var pref = new SortPreference("My key", true);
        expect(pref.key).toEqual("My key");
    });

    it("sets isDesc on creation", function() {
        var pref = new SortPreference("My key", true);
        expect(pref.isDesc).toBe(true);
    });
});
