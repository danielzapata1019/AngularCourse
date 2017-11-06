angular.module("myFirstAppHttp", [])
    .controller('firstControllerHttp', function ($scope,$http) {
$scope.posts=[];
$scope.newPosts={};
    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(function (data){
        console.log(data.data);
        $scope.posts=data.data;
    },function (error){

    });
    $scope.addPost=function (data,status,headers,config) {
        $http({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            json:{
                title:$scope.newPosts.title,
                body:$scope.newPosts.body,
                userId:1
            }
        }).then(function (data,status,headers,config){
            $scope.posts.push($scope.newPosts)
            $scope.addPost={};
        },function (error,status,headers,config){

        });
        
    }
});