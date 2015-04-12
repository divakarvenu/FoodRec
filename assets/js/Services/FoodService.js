//service for food items add,edit,delete,update
foodModule.factory('Notes', function($resource){
	return $resource('http://localhost:1337/Food/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});

//service for food comment add
foodModule.factory('Comment', function($resource){
	return $resource('http://localhost:1337/Comments/:id', {id:'@id'}, {
		update: {
			method:'PUT'
		}
	});
});
