module.exports = function (module) {
  module.filter("talkStatusClass", function() {
      var statusClasses = ["unassigned", "assigned", "in-progress",
          "deferred", "topic-approved", "date-assigned"];
      return function (status) {
          var statusClass = statusClasses[status];
          return statusClass || statusClasses[0];
      };
  });
};
