/**
* Task.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    taskname:{
      type: 'string',
      unique: true,
      required: true,
    },
    taskdate:'datetime',
    taskestimation:'string',
    taskpoints:'integer',
    tasksummary:'string',
    taskapproval:'string',
    taskowner: {
      model: 'user'
    },
  }
};
