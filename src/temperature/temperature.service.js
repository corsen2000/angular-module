var module = angular.module('module');

module.factory('temperature', function() {
  return {
    convertToCelcius: function(faren) {
      return faren * 100;
    }
  };
});
