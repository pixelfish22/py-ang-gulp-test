describe('test tests', function(){
    var $scope, controller;

    beforeEach(angular.mock.module('creatureApp'));
    beforeEach(inject(function(_$rootScope_, _$controller_){
        $scope = _$rootScope_.$new();
        controller = _$controller_('MainController', {$scope:$scope});
    }));

    it('should be 2', function(){
        expect(2+2).toBe(4);
    })
});
