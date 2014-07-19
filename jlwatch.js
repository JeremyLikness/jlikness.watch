(function (w) {

    function Service () {       
    }
    
    angular.extend(Service.prototype, {
        watchCount: 0,
        elem: {},
        countWatches: function () {
            
            var _this = this;
            this.watchCount = 0;
            
            var iterate = function (element) {
                if (element.scope()) {
                    angular.forEach(element.scope().$$watchers, function (w) {
                        _this.watchCount += 1;
                    });
                }
                
                angular.forEach(element.children(), function (child) {
                    iterate(angular.element(child));
                });
            };

            iterate(angular.element(this.elem));                            
            return this.watchCount;
        },
        register: function (elem) {
            this.elem = elem;
        }
    });
    
    w.service('jlWatchService', Service);
    
    w.directive('jlWatch', ['jlWatchService', function (ws) {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                ws.register(elem);    
            }
        };
    }]);
       
})(angular.module('jlikness.watch', []));
