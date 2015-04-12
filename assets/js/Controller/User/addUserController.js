foodModule.controller('addUserController', function($scope,$state,User,Login,localStorageService){

	$scope.user = new User();
	$scope.user.password=Math.random().toString(36).substring(7);
	$scope.addUser = function() {
		$scope.user.$save(function () {
			localStorageService.set('user', $scope.user);
		});

		//#####################   API Call to Mandrill API   ###################
					$.ajax({
		      		type: 'POST',
				      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				      data: {
				        'key': '7FAo8hW2hMZZ8p1pbwzzAg',	//API key -> should come from process file
				        'message': {
				          'from_email': 'password@Foodrec.com',
				          'to': [
				              {
				                'email': $scope.user.email,	// Receiver's email id
				                'name': 'Foodrec',
				                'type': 'to'
				              }
				            ],
				          'autotext': 'false',
				          'subject': 'Password',
				          'html':'Hi your password is'+$scope.user.password
				           }
				      }
				     }).done(function(response) {
									//Response of the email logged
									$state.go('Food');
				       console.log(response);
				     });


	}
	$scope.signIn=function(){
		$scope.signuser=Login.query({email:$scope.user.signemail},{password:$scope.user.signpassword}).$promise.then(function(todos) {
			$scope.todos = todos;
     				if($scope.todos[0]){
							localStorageService.set('user', $scope.todos[0]);
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
