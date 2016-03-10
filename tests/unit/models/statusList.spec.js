describe('StatusList', function() {
    beforeEach(angular.mock.module('BristechSRM'));

    var StatusList;

    beforeEach(inject(function(_StatusList_) {
        StatusList = _StatusList_;
    }));

    it("is empty on creation", function() {
        var list = new StatusList();
        expect(list.statuses.length).toEqual(0);
    });

    it("adds status when addStatus is called", function() {
        var list = new StatusList();
        list.addStatus(1);
        list.addStatus(2);
        expect(list.statuses).toEqual([1, 2]);
    });

    it("does not add duplicate statuses", function() {
        var list = new StatusList();
        list.addStatus(1);
        list.addStatus(2);
        list.addStatus(1);
        expect(list.statuses).toEqual([2, 1]);
    });

    it("removes status when removeStatus is called", function() {
        var list = new StatusList();
        list.addStatus(1);
        list.addStatus(2);
        list.removeStatus(1);
        expect(list.statuses).toEqual([2]);
    });

    it("maintains list of statuses when removing status not in list", function() {
        var list = new StatusList();
        list.addStatus(1);
        list.removeStatus(2);
        expect(list.statuses).toEqual([1]);
    });

    it("reports if status is in list", function() {
        var list = new StatusList();
        list.addStatus(1);
        list.addStatus(2);
        list.addStatus(3);
        expect(list.hasStatus(2)).toBe(true);
    });

    it("reports if status not in list", function() {
        var list = new StatusList();
        list.addStatus(1);
        list.addStatus(2);
        list.addStatus(3);
        expect(list.hasStatus(4)).toBe(false);
    });
});
