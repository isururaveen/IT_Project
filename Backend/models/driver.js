const db = require('../util/database');

module.exports = class Driver {

    static fetchAll () {
        return db.execute('SELECT * FROM employee WHERE emp_type = "Driver" ');
    }
}
