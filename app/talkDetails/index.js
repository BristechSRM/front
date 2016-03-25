module.exports = function(module) {
    require("./talkDetails.controller")(module);
    require("./talkDetailsSidebar/talkDetailsSidebar")(module);
    require("./correspondenceCard/correspondenceCard")(module);
};
