foodModule.factory('Notes', function($resource){
	return $resource('http://localhost:1337/Food/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});
