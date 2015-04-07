  /**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name: 'string',
    password: 'string',
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    age: 'integer',
    location:'string',
    food: {
      collection: 'food',
      via: 'owner'
    }
  }
};
