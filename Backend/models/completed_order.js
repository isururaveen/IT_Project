const db = require('../util/database');

module.exports = class Order {

    static fetchAll () {
        return db.execute (
            'SELECT * FROM customer_order WHERE delivery_status = "Completed" '
            );
    }

    static delete(id) {   
        return db.execute(
            'DELETE FROM customer_order WHERE order_id = ?',[id]
            );
    }

    static get (id) {
        return db.execute('SELECT * FROM customer_order WHERE order_id = ?', [id]);
    }
}