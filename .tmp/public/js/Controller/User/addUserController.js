foodModule.controller('addUserController', function($scope,$state,User,Login,localStorageService){

	$scope.signIn=function(){
		$scope.signuser=Login.query({email:$scope.user.signemail},{password:$scope.user.signpassword}).$promise.then(function(todos) {
			$scope.todos = todos;
     				if($scope.todos[0]){
							if($scope.user.signpassword==$scope.todos[0].password){
								localStorageService.set('user', $scope.todos[0]);
								$state.go('viewUser');
							}
							else{
								angular.element(document.getElementById('error')).html("Invalid Username/Password");
							}
							}
						else{
									angular.element(document.getElementById('error')).html("Invalid Username/Password");
							}
			}, function(errResponse) {
	angular.element(document.getElementById('error')).html("Invalid Username/Password");
});


	}

})
