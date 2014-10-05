var module = angular.module('module');

module.directive('mdTemperature', function($log, temperature) {
  return {
    restrict: 'E',
    template: '<p class="md-sweet">Hello World</p>',
    link: function() {
      $log.log(temperature.convertToCelcius(5));
    }
  };
});
