var db = require('../dbconnection.js');

var Task={
    getAllTask:function(callback){
        return db.query("SELECT * FROM Task");
    },
    getTaskByID:function(id, callback){
        return db.query("SELECT * FROM Task WHERE Id = ?", [id], callback);
    },
    addTask:function(Task, callback){
        return db.query("INSERT INTO Task VALUES(?,? ?)", [Task.id, Task.Title, Task.Status],, callback);
    },
    deleteTask:function(id, callback){
        return db.query("DELETE FROM Task WHERE id = ?", [id], callback);
    },
    updateTask:function(id, Task, callback){
        return db.query("UPDATE Task set Title = ?, Status = ? WHERE Id = ?", [Task.Title, Task.Status, is], callback);
    }
};
module.exports = Task; assaa