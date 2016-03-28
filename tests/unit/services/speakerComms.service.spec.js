describe('Speaker comms service', function() {
    var service, $httpBackend, backendFullUrl;

    var lastContacted = {
        "test1@email.com": "2016-03-07T12:45:04Z",
        "test2@email.com": "2016-02-17T15:51:15Z",
        "test3@email.com": "2004-01-30T05:00:01Z"
    };

    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    beforeEach(inject(function(_speakerCommsService_, _$httpBackend_, _BACKEND_){
        service = _speakerCommsService_;
        $httpBackend = _$httpBackend_;
        backendFullUrl = _BACKEND_.url + ":" + _BACKEND_.speakerCommsPort + "/last-contacted";
    }));

    describe('getLastContacted', function(){
        it('performs HTTP GET request on the given url', function(){
            $httpBackend.expectGET(backendFullUrl).respond(lastContacted);
            service.getLastContacted();
            $httpBackend.flush();
        });

        it('returns the last contacted data returned from the HTTP request', function() {
            $httpBackend.whenGET(backendFullUrl).respond(lastContacted);
            service.getLastContacted().then(function(result) {
                expect(result).toEqual(lastContacted);
            });
            $httpBackend.flush();
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
