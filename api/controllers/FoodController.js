/**
 * FoodController
 *
 * @description :: Server-side logic for managing foods
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	attributes: {
	foodname: 'string',
	foodreview: 'string',
	foodlocation:'string',
	foodcategory:'string',
	comments:{
		collection:'comments',
		via:'foodname',
	},
	owner: {
		model: 'user',
	}
}
};
