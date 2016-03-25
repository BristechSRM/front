module.exports = function(module) {
    require("./dashboard.controller")(module);
    require("./sidebar/sidebar")(module);
    require("./sidebar/statusCheckbox/statusCheckbox")(module);
    require("./talkOutlineCard/talkOutlineCard")(module);
};
