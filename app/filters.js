module.exports = function (module) {
  module.filter("stars", function() {
      return function (input) {
          var out = "";
          for (var i = 0;i < input;i++) {
              out += "★";
          }

          return out;
      };
  });
};
