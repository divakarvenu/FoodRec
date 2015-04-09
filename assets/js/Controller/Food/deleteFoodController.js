foodModule.controller('FoodListController', function($scope,$resource,$state,Notes,localStorageService){

//  var User=$resource('http://localhost:1337/User/:email', {email:'@email'});
//  $scope.user=User.get({email:localStorageService.get('user').email});

 console.log("user details");
	console.log($scope.user);

	$scope.Fooditem= Notes.query();


   console.log($scope.Fooditem);

	 console.log("localstorage");
	 console.log(localStorageService.get('user'));

  $scope.chec=function(value){
    console.log(value);
    alert(value);
  }

	$scope.deleteFood = function (Food,element) {
			if(confirm("Are you sure u want to delete?")) {
			Food.$delete(function() {
      console.log(element);
      angular.element(document.getElementById(element)).remove();
			});
			}
		}

});
