/* global JustGage */
/* global angular */
angular.module('ui').directive('uiTraffic', [ '$timeout', '$interpolate',
    function ($timeout, $interpolate) {
        return {
			restrict: 'E',
			replace: true,
			templateUrl: 'components/ui-traffic/ui-traffic.html',
			link: function(scope, element, attrs) {
				$timeout(function() {
				
					scope.$watch('me.item.value', function (newValue) {
						newValue = newValue || 'green';
						scope.me.item.red = scope.me.item.green = scope.me.item.orange = scope.me.item.blue = false;
						scope.me.item[newValue] = true;
					});
				}, 0);
			}
		}
    }]);
