describe('BristechSRM', function() {
    var service, $httpBackend;

    var backend = {url : 'http://api.bris.tech', port: 80};
    var backendFullUrl = backend.url + ":" + backend.port + "/speakers";
    var speakers = [
        {Name: "Joe Bloggs"}
    ];

    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    beforeEach(function() {
        angular.mock.module('BristechSRM', function($provide){
          $provide.constant('BACKEND', backend);
        });
    });

    beforeEach(inject(function(_speakerService_, _$httpBackend_, $templateCache){
        service = _speakerService_;
        $httpBackend = _$httpBackend_;
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
