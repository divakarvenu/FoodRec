/**
* Food.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    foodname: 'string',
    foodreview:'string',
    foodlocatoin:'string',
    foodcategory:'string',
    owner: {
      model: 'user'
    }
  }
};
