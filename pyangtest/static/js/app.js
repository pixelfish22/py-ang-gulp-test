angular.module('creatureApp', [])
.controller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
    vm = this;
    vm.doubleNumber = function doubleNum(inputNum){
        return doubleNum * 2;
    }
}