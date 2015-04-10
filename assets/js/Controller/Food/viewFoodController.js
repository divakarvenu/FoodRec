foodModule.controller('viewFoodController', function($scope,$stateParams,Notes,localStorageService){


 console.log("localstorage");
 console.log(localStorageService.get('user'));
  console.log($stateParams.id)
	$scope.scratch = Notes.get({id:$stateParams.id}).$promise.then(function(todos) {
    $scope.scratch=todos;
    console.log('working is awesome');
    console.log(todos.owner.id);
    console.log($scope.scratch.owner.id);
    flag=$scope.scratch;
});			//get scratch with id in state paremeters




  $scope.upvote=function(){
    console.log('inside function');
    if($scope.scratch.foodupvote){
        $scope.scratch.foodupvote=$scope.scratch.foodupvote+1;
      }
    else{
     $scope.scratch.foodupvote=1;
      }



   $scope.scratch.$save(function () {
     console.log('upvote');
     });
  }


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
  }




})
