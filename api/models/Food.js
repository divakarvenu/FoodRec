/**
* Food.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    foodname:{
      type: 'string',
      unique: true,
      required: true,
    },
    foodreview:'string',
    foodlocation:'string',
    foodcategory:'string',
    foodupvote:'integer',
    fooddownvote:'integer',
    owner: {
      model: 'user'
    },
    Comments: {
      collection: 'comments',
      via: 'comment'
    }
  }
};
