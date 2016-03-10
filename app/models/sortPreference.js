module.exports = function (module) {
    module.factory("SortPreference", sortPreference);

    function sortPreference() {
        function SortPreference(key, isDesc) {
            this.key =  key;
            this.isDesc = isDesc;
        }

        return SortPreference;
    }
};
