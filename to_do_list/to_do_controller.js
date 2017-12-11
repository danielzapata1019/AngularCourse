angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function ($scope,localStorageService) {
    if(localStorageService.get("angular-todoList")){
        $scope.todo=localStorageService.get("angular-todoList");
    }else{
        $scope.todo=[];
    }

    /*
        actividad:"",
        fecha:10-12-2017;

    */

    $scope.$watchCollection('todo', function (newValue,oldValue) {
        localStorageService.set("angular-todoList",$scope.todo);
    });
    $scope.addAct=function () {
        $scope.todo.push($scope.newAct);
        $scope.newAct={};
        localStorageService.set("angular-todoList",$scope.todo);
    }
    /*$scope.clean=function () {
        $scope.todo=[];
        localStorageService.set("angular-todoList",$scope.todo);
    }*/
});