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
		$scope.signuser=Login.query({email:$scope.user.signemail},{password:$scope.user.signpassword}).$promise.then(function(todos) {
			$scope.todos = todos;
     				if($scope.todos[0]){
								$state.go('Food');
							}
						else{
									angular.element(document.getElementById('error')).html("Invalid Username/Password");
							}
			}, function(errResponse) {
	angular.element(document.getElementById('error')).html("Invalid Username/Password");
});


	}

})
