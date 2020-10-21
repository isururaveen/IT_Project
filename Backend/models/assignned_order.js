const db = require('../util/database');

module.exports = class AssignedOrder {
    constructor(order_id, driver_id, assigned_date, delivery_status) {
        this.order_id = order_id;
        this.driver_id = driver_id;
        this.assigned_date = assigned_date;
        this.delivery_status = delivery_status;
    }

    static fetchAll () {
        return db.execute(
            'SELECT * FROM customer_order WHERE delivery_status = "Assigned" '
            );
    }

    static delete(id) {   
        return db.execute(
            'DELETE FROM customer_order WHERE order_id = ?',[id]
            );
    }

    static post(order_id, driver_id, assigned_date, delivery_status) {
        return db.execute(
            'INSERT INTO customer_order (order_id, driver_id, assigned_date, delivery_status) VALUES (?, ?, ?, ?)',
            [order_id, driver_id, assigned_date, delivery_status]
            );
    }

    static update(order_id, driver_id, assigned_date, delivery_status) {
        return db.execute(
            'UPDATE assigned_order SET driver_id = ?, assigned_date = ?, delivery_status = ? WHERE order_id = ?',
            [order_id , driver_id, assigned_date, delivery_status, id]
        );
    }

    static find(order_id) {
        return db.execute('SELECT * FROM customer_order WHERE order_id = ?',[order_id]);
    }
}