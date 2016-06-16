angular.module('apps').value('fitnessToastr', toastr);

angular.module('apps').factory('myNotifier', function(fitnessToastr) {
    return {
        notify: function(msg) {
            fitnessToastr.success(msg);
            console.log(msg);
        }
    }
});
