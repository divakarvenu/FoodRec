foodModule.factory('User', function($resource){
	return $resource('http://localhost:1337/User/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});



foodModule.factory('Login', function($resource){
	return $resource('http://localhost:1337/User/:email/password/:password', {email:'@email',password:'@password'}, {
		update: {
			method:'POST'
		}
	});
});
