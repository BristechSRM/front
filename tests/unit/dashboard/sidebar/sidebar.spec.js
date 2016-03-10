describe('sidebar', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var $compile;
    var $rootScope;
    var StatusList;
    var SortPreference;
    var excludedStatusesList;
    var pref;

    beforeEach(inject(function(_$compile_, _$rootScope_, _StatusList_, _SortPreference_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        StatusList = _StatusList_;
        SortPreference = _SortPreference_;
        excludedStatusesList = new StatusList();
        pref = new SortPreference('name', true);
    }));

    function compileElement(list, preference) {
        $rootScope.list = list;
        $rootScope.preference = preference;
        var html = "<sidebar excluded-statuses-list=\"list\" sort-preference=\"preference\"></sidebar>";
        var element = $compile(html)($rootScope);
        $rootScope.$digest();
        return element;
    }

    it("isSelected returns true if status not excluded", function() {
        var element = compileElement(excludedStatusesList, pref);
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.isSelected(1)).toBe(true);
    });

    it("isSelected returns false if status excluded", function() {
        excludedStatusesList.addStatus(2);
        var element = compileElement(excludedStatusesList, pref);
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.isSelected(2)).toBe(false);
    });

    it("toggleSelected excludes included state", function() {
        var element = compileElement(excludedStatusesList, pref);
        var isolatedScope = element.isolateScope();
        isolatedScope.toggleSelected(1);
        expect(isolatedScope.excludedStatusesList.statuses).toEqual([1]);
    });

    it("toggleSelected includes excluded state", function() {
        excludedStatusesList.addStatus(1);
        var element = compileElement(excludedStatusesList, pref);
        var isolatedScope = element.isolateScope();
        isolatedScope.toggleSelected(1);
        expect(isolatedScope.excludedStatusesList.statuses).toEqual([]);
    });

    it("selects preferred option", function() {
        var element = compileElement(excludedStatusesList, pref);
        var select = getSelect(element);
        expect(select.val()).toBe("string:" + pref.key);
    });

    function getSelect(element) {
        return element.find("select");
    }
});
