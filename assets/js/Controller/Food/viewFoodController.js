foodModule.controller('viewFoodController', function($scope,$stateParams,Notes,localStorageService){

 console.log("localstorage");
 console.log(localStorageService.get('user'));
  console.log($stateParams.id)
	$scope.scratch = Notes.get({id:$stateParams.id});			//get scratch with id in state paremeters

})
