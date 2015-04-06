foodModule.controller('addUserController', function($scope,$state,User,Login,localStorageService){

	$scope.user = new User();
	$scope.user.password=Math.random().toString(36).substring(7);
	$scope.addUser = function() {
		$scope.user.$save(function () {
			$state.go('Food');
		});
		localStorageService.set('user', $scope.user);
	}
	$scope.signIn=function(){
		console.log('Sign in function works');
		console.log($scope.user.signemail);
		console.log($scope.user.signpassword);
		$scope.signuser=Login.get({email:$scope.user.signemail,password:$scope.user.signpassword});
		console.log($scope.signuser);
	}

})
