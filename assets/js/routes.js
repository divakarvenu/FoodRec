
foodModule.config(function($stateProvider,$httpProvider) {

	$stateProvider.state('home',{
    url:'/home',
    templateUrl:'templates/food.html',
		controller:'addUserController'
  })
  .state('scratchpad',{
		url:'/scratchpad',
		templateUrl:'templates/scratchpad.html',
		controller:'scratchListController'
	})
	.state('addScratch',{
		url:'/addNewScratch',
		templateUrl:'templates/addNewScratch.html',
		controller:'addScratchController'
	})
	.state('editScratch',{
		url:'/scratchpad/:id/edit',
		templateUrl:'templates/edit.html',
		controller:'editFoodController'
	})
	.state('viewScratch',{
		url:'/scratchpad/:id/view',
		templateUrl:'templates/viewScratch.html',
		controller:'viewScratchController'
	})
}).run(function($state){
	$state.go('home');
});
