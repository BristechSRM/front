describe('Speaker service', function() {
    var service, $httpBackend, backendFullUrl;

    var speakers = [
        {speakerName: "Joe Bloggs"}
    ];

    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    beforeEach(inject(function(_speakerService_, _$httpBackend_, _BACKEND_){
        service = _speakerService_;
        $httpBackend = _$httpBackend_;
        backendFullUrl = _BACKEND_.url + ":" + _BACKEND_.speakersPort + "/talkoutlines";
    }));

    describe('getSpeakers makes get request', function(){
        it('should perform http GET on the given url', function(){
            $httpBackend.expectGET(backendFullUrl).respond(speakers);
            service.getSpeakers();
            $httpBackend.flush();
        });
    });

    describe('getSpeakers returns speakers', function() {
        it('should return the speakers returned from the http request', function() {
            $httpBackend.whenGET(backendFullUrl).respond(speakers);
            service.getSpeakers().then(function(result) {
                expect(result).toEqual(speakers);
            });

            $httpBackend.flush();
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
