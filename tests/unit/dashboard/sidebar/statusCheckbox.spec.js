describe('statusCheckbox', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var $compile;
    var $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    function compileElement(label, classes, checked) {
        var html = "<status-checkbox label=\"" + label
            + "\" class=\"" + classes
            + "\" checked=\"" + checked + "\"></status-checkbox>";
        var element = $compile(html)($rootScope);
        $rootScope.$digest();
        return element;
    }

    it("displays label", function() {
        var element = compileElement("My label", "className", true);
        expect(element.html()).toContain("My label");
    });

    it("sets rectangle classes", function() {
        var element = compileElement("My label", "className1 className2", true);
        var rect = getRect(element);
        var classes = rect.attr("class").split(" ");
        var containsAll = ["className1", "className2"].every(function(className) {
            return classes.indexOf(className) !== -1;
        })
        expect(containsAll).toBe(true);
    });

    it("checks checkbox if checked true", function() {
        var element = compileElement("My label", "className", true);
        var checkbox = getCheckbox(element);
        expect(checkbox.attr("checked")).toBeTruthy;
    });

    it("checks checkbox if checked false", function() {
        var element = compileElement("My label", "className", false);
        var checkbox = getCheckbox(element);
        expect(checkbox.attr("checked")).toBeFalsy;
    });

    function getRect(element) {
        return element.find("rect");
    }

    function getCheckbox(element) {
        return element.children().children().find("input");
    }
});
