module.exports = function(module) {
    require("./dashboard.controller")(module);
    require("./sidebar/sidebar")(module);
    require("./sidebar/stateCheckbox/stateCheckbox")(module);
    require("./speakerCard/speakerCard")(module);
};
