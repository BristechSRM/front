module.exports = function(module) {
    require("./dashboard.controller")(module);
    require("./sidebar/sidebar")(module);
    require("./sidebar/filterOption/filterOption")(module);
    require("./speakerCard/speakerCard")(module);
};
