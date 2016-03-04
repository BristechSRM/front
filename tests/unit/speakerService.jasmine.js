describe('BristechSRM', function() {
    beforeEach(angular.mock.module('BristechSRM'));

    var speakerService;

    beforeEach(inject(function(_speakerService_){
        speakerService = _speakerService_;
    }));

    describe('speakerService', function() {
        it('should return a list of speakers', function() {
            expect(speakerService.getSpeakers().length).toBeGreaterThan(0);
        });
    });
});
