foodModule.controller('scratchListController', function($scope,$resource,$state,Notes,localStorageService){

//  var User=$resource('http://localhost:1337/User/:email', {email:'@email'});
//  $scope.user=User.get({email:localStorageService.get('user').email});

 console.log("user details");
	console.log($scope.user);

	$scope.scratchpad = Notes.query();



	 console.log("localstorage");
	 console.log(localStorageService.get('user'));


	$scope.deleteScratch = function (scratch) {
			if(confirm("Are you sure u want to delete?")) {
			scratch.$delete(function() {
        console.log("Delete function")	;				//Single delete
				$state.go('scratchpad');
			});
			}
		}

});
