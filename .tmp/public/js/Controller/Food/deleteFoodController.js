foodModule.controller('FoodListController', function($scope,$resource,$state,Notes,localStorageService){

//  var User=$resource('http://localhost:1337/User/:email', {email:'@email'});
//  $scope.user=User.get({email:localStorageService.get('user').email});


if(localStorageService.get('user')){
	console.log('works');
	console.log(localStorageService.get('user'));
}
else{
	console.log('nt working');
	$state.go('home');
}



	$scope.Fooditem= Notes.query(); //getting all the items

//logout function
  $scope.logout=function(){
    console.log('logout is working');
    localStorageService.remove('user');
    $state.go('home');
  }

//delete function using prompt
	$scope.deleteFood = function (Food,element) {
			if(confirm("Are you sure u want to delete?")) {
			Food.$delete(function() {
      console.log(element);
      angular.element(document.getElementById(element)).remove();
			});
			}
		}

});
