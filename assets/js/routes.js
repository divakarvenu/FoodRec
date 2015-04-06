
foodModule.config(function($stateProvider,$httpProvider) {

	$stateProvider.state('home',{
    url:'/home',
    templateUrl:'templates/home.html',
		controller:'addUserController'
  })
  .state('Food',{
		url:'/Food',
		templateUrl:'templates/food.html',
		controller:'FoodListController'
	})
	.state('addFood',{
		url:'/addFood',
		templateUrl:'templates/addFood.html',
		controller:'addFoodController'
	})
	.state('editFood',{
		url:'/editFood/:id/edit',
		templateUrl:'templates/editFood.html',
		controller:'editFoodController'
	})
	.state('viewFood',{
		url:'/viewFood/:id/view',
		templateUrl:'templates/viewFood.html',
		controller:'viewFoodController'
	})
}).run(function($state){
	$state.go('home');
});
