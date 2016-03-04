describe('BristechSRMSpeakerCard', function() {
    var $filter;
    beforeEach(function(){
        angular.mock.module('BristechSRM');
        inject(function ($filter) {
          stars = $filter("stars");
        });
    });

    it("should return a string of star symbols equal to the number passed in", function() {
            // var stars = $filter('stars');
            expect(stars(0).length).toEqual(0);
        });
});
