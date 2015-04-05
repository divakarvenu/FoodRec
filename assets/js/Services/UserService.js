foodModule.factory('User', function($resource){
	return $resource('http://localhost:1337/User/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});


foodModule.factory('userEmail', function($resource){
	return $resource('http://localhost:1337/User/:email', {email:'@email'}, {
		update: {
			method:'PUT'
		}
	});
});
