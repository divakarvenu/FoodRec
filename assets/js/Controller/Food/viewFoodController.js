foodModule.controller('viewFoodController', function($scope,$stateParams,Notes,$state,Comment,localStorageService,$window){

 var flag;


 console.log("localstorage");
 console.log(localStorageService.get('user'));
 console.log($stateParams.id)


//Getting the selected food using state parameter
	$scope.scratch = Notes.get({id:$stateParams.id}).$promise.then(function(todos) {
    $scope.scratch=todos;
    console.log('working is awesome');
    console.log(todos.owner.id);
    console.log($scope.scratch.owner.id);
    $scope.comment=$scope.scratch.Comments;
    flag=$scope.scratch;

});

//adding comment with association
$scope.addComment=function(){
  console.log('comment function works');
  $scope.comment=new Comment();
  $scope.comment.comment=$stateParams.id;
  console.log($scope.scratch.foodcomment);
  $scope.comment.foodcomment=$scope.scratch.foodcomment;
  $scope.comment.email=localStorageService.get('user').email;
  $scope.comment.$save(function () {
    $window.location.reload();
    console.log($scope.comment);
  });
}

//logout function
$scope.logout=function(){
  console.log('logout is working');
  localStorageService.remove('user');
  $state.go('home');
}

/*upvote function
  $scope.upvote=function(){
    console.log('inside function');
    console.log($scope.scratch.owner);
    console.log($scope.scratch.vote);
    $scope.scratch.$save(function () {
     console.log('upvote');
     });
  }

//downvote function
  $scope.downvote=function(){
    console.log('inside function');
    console.log($scope.scratch.fooddownvote);
    if($scope.scratch.fooddownvote){
      $scope.scratch.fooddownvote=$scope.scratch.fooddownvote+1;
   }
   else{
     $scope.scratch.fooddownvote=1;
   }
   $scope.scratch.$save(function () {
     console.log('downvote');
     });
   }*/




})
