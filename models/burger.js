// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers_tb", function(res) {
          cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers_tb", cols, vals, function(res) {
          cb(res);
        });
    },
    update: function (id,cb) {
        orm.update("burgers_tb", id, cb, function(res){
            cb(res);  
        }) 
    },
    delete: function (condition, cb) {
        orm.delete("burgers_tb", condition, function(res) {
          cb(res);
        });
    }
};

// Export the database functions for the controller 
module.exports = burger;