//to add user
foodModule.factory('User', function($resource){
	return $resource('http://localhost:1337/User/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});


//to check out the sign in process
foodModule.factory('Login', function($resource){
	return $resource('http://localhost:1337/User/:id', {}, {
		'query': {method: 'GET', isArray: true }
	});
});
