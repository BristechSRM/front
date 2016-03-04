describe('BristechSRM', function() {
    var backend = {url : 'http://localhost', port: 9000};
    var speaker = {'name' : 'Tom Thomson'};
    var $httpBackend;
    var speakerService;
    var deferred;

    beforeEach(angular.mock.module('BristechSRM'));

    beforeEach(function() {
        angular.mock.module('BristechSRM', function($provide){
            $provide.constant('backend', backend);
        });
    });

    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
        deferred = $injector.get('$q').defer();
        speakerService = $injector.get('speakerService');
        spyOn(speakerService, 'getSpeakers').and.returnValue(deferred.promise);
    }));

    describe('speakerService', function(){
        it('should perform http GET on the given url', function(){
            $httpBackend.expectGET(backend.url);
            speakerService.getSpeakers();
        });
    });

    describe('speakerService', function() {
        it('should return the speakers returned from the http request', function() {
            deferred.resolve(speaker);
            speakerService.getSpeakers().then(function(result) {
                expect(result).toBe(speaker);
            });
        });
    });
});
