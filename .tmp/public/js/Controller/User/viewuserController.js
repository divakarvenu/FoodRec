foodModule.controller('userviewController', function($scope,$resource,$state,Login,localStorageService){

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



 $scope.userlist= Login.query(); //getting all the items
 console.log($scope.userlist);

//logout function
  $scope.logout=function(){
    console.log('logout is working');
    localStorageService.remove('user');
    $state.go('home');
  }


});
