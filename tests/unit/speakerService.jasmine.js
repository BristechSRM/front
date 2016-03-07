describe('BristechSRM', function() {
    var service, $httpBackend;

    var backend = {url : 'http://localhost', port: 9000};
    var speakers = [
        {Name: "Joe Bloggs"}
    ];

    beforeEach(angular.mock.module('BristechSRM'));

    beforeEach(function() {
        angular.mock.module('BristechSRM', function($provide){
        $provide.constant('backend', backend);
        });
    });

    beforeEach(inject(function(_speakerService_, _$httpBackend_){
        service = _speakerService_;
        $httpBackend = _$httpBackend_;
    }));

    describe('getSpeakers makes get request', function(){
        it('should perform http GET on the given url', function(){
            $httpBackend.expectGET(backend.url + ":" + backend.port + "/speakers").respond(speakers);
            service.getSpeakers();
            $httpBackend.flush();
        });
    });

    describe('getSpeakers returns speakers', function() {
        it('should return the speakers returned from the http request', function() {
            $httpBackend.whenGET(backend.url + ":" + backend.port + "/speakers").respond(speakers);
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
