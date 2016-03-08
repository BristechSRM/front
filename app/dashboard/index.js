module.exports = function(module) {
    require("./dashboard.controller")(module);
    require("./speakerCard/speakerCard")(module);
};
