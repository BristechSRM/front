describe('Talk outline service', function() {
    var service, $httpBackend, backendFullUrl;

    var talkOutlines = [
        {speakerName: "Joe Bloggs"}
    ];

    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    beforeEach(inject(function(_talkOutlinesService_, _$httpBackend_, _BACKEND_){
        service = _talkOutlinesService_;
        $httpBackend = _$httpBackend_;
        backendFullUrl = _BACKEND_.url + ":" + _BACKEND_.port + "/talkoutlines";
    }));

    describe('getTalkOutlines', function(){
        it('performs HTTP GET request on the given url', function(){
            $httpBackend.expectGET(backendFullUrl).respond(talkOutlines);
            service.getTalkOutlines();
            $httpBackend.flush();
        });

        it('returns the talk outlines returned from the HTTP request', function() {
            $httpBackend.whenGET(backendFullUrl).respond(talkOutlines);
            service.getTalkOutlines().then(function(result) {
                expect(result).toEqual(talkOutlines);
            });
            $httpBackend.flush();
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
