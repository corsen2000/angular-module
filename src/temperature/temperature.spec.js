describe('temperature module', function() {
  beforeEach(window.angular.mock.module('module'));

  describe('temperature service', function() {
    var temperature;

    beforeEach(function() {
      inject(function($injector) {
        temperature = $injector.get('temperature');
      });
    });

    it('Converts farenheight to celcius', function() {
      expect(temperature.convertToCelcius(5)).toBe(500);
    });
  });

  describe('temperature', function() {
    var $compile;
    var $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        var element = $compile("<md-temperature></md-temperature>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('Hello World');
    });
  });

});
