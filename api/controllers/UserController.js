/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	attributes: {
    name: 'string',
    age: 'integer',
		password:'string',
		email:'string',
		location:'string',
    food: {
      collection: 'food',
      via: 'owner'
    }
  }
};
