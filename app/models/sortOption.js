module.exports = function (module) {
    module.factory("SortOption", sortOption);

    function sortOption() {
        function SortOption(key, label) {
            this.key = key;
            this.label = label;
        }

        return SortOption;
    }
};
