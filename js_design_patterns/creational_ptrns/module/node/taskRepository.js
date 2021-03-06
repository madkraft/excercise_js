var Repo = function () {

    var get = function(id){
        console.log('Getting task ' + id);
        return {
            name: 'New task from database'
        };
    };

    var save = function(task){
        console.log('Saving ' + task.name + ' to the db');
    };

    return {
        get: get,
        save: save
    };
};

module.exports = Repo();
