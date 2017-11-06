var app = angular.module("myFirstApp", []);
app.controller('firstController', function ($scope) {
    $scope.nombre = "Daniel";
    $scope.comentarios = [
        {
            comentario: "Buen tutorial",
            user: "Daniel"
        },
        {
            comentario: "super",
            user: "Juan"
        }
    ];
    $scope.agregarComentario=function () {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario={};
    }
});