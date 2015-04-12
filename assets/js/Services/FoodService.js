foodModule.factory('Notes', function($resource){
	return $resource('http://localhost:1337/Food/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});


foodModule.factory('Comment', function($resource){
	return $resource('http://localhost:1337/Comments/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});
