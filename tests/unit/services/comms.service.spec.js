describe('Comms service', function() {
    var service, $httpBackend, backendFullUrl;

    var comms = { "Joe@Bloggs.com" : "2004-01-30T05:00:01Z" };
    var speakers = [
        {"email" : "Joe@Bloggs.com"}
    ]

    var meldedSpeakerComms = [
        {"email" : speakers[0].email, "lastContacted" :comms[speakers[0].email]}
    ]

    beforeEach(angular.mock.module('BristechSRM'));
    beforeEach(angular.mock.module('template-module'));

    beforeEach(inject(function(_commsService_, _$httpBackend_, _BACKEND_){
        service = _commsService_;
        $httpBackend = _$httpBackend_;
        backendFullUrl = _BACKEND_.url + ":" + _BACKEND_.port + "/talkoutlines";
    }));

    describe('fetch last contacted makes get request', function(){
        it('should perform http GET on the given url', function(){
            $httpBackend.expectGET("http://localhost:8080/last-contacted").respond(comms);
            service.fetchLastContacted();
            $httpBackend.flush();
        });
    });

    describe('fetch last contacted returns last contacted', function() {
        it('should return the last contacted returned from the http request', function() {
            $httpBackend.whenGET("http://localhost:8080/last-contacted").respond(comms);
            service.fetchLastContacted().then(function(result) {
                expect(result).toEqual(comms);
            });

            $httpBackend.flush();
        });
    });

    describe('attach calls fetch last', function() {
        it('should call fetch last if it has not been called yet', function() {
            $httpBackend.expectGET("http://localhost:8080/last-contacted").respond(comms);
            service.attachComms(speakers)

            $httpBackend.flush();
        });
    });

    describe('attach attaches last contacted to speakers', function() {
        it('it should attach a last contacted date to the correct speaker', function() {
            $httpBackend.whenGET("http://localhost:8080/last-contacted").respond(comms);
            service.attachComms(speakers).then(function(){
                expect(speakers).toEqual(meldedSpeakerComms)
            });

            $httpBackend.flush();
        })
    })

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});