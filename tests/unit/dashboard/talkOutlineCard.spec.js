describe('Talk outline card', function() {
    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    var $compile;
    var $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    var talkOutline = {
        "talkId":1,
        "speakerName":"Thomas Hull",
        "title":"To know javascript is to love javascript",
        "speakerRating":5,
        "adminName":"David Wybourn",
        "adminImageUrl":"https://placebear.com/50/50",
        "speakerLastContacted":"1970-01-01T00:00:00",
        "status":1
    };

    function compileElement(talkOutline) {
        $rootScope.talkOutline = talkOutline;
        var html = '<talk-outline-card talk-outline="talkOutline"></talk-outline-card>';
        var element = $compile(html)($rootScope);
        $rootScope.$digest();
        return element;
    }

});
