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

    describe('getTalkOutline', function() {
        it('performs HTTP GET request on the given url', function() {
            var talkId = 1;
            $httpBackend.expectGET(backendFullUrl + "/" + talkId).respond(talkOutlines[0]);
            service.getTalkOutline(1);
            $httpBackend.flush();
        });

        it('returns the talk outline returned from the HTTP request', function() {
            var talkId = 1;
            $httpBackend.whenGET(backendFullUrl + "/" + talkId).respond(talkOutlines[0]);
            service.getTalkOutline(1).then(function(result) {
                expect(result).toEqual(talkOutlines[0]);
            });
            $httpBackend.flush();
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
