const db = require('../util/database');

module.exports = class Order {
    constructor(order_id, driver_id, assigned_date, delivery_status){
        this.order_id = order_id;
        this.driver_id = driver_id;
        this.assigned_date = assigned_date;
        this.delivery_status = delivery_status;
    }

    static fetchAll () {
        return db.execute('SELECT * FROM customer_order WHERE delivery_status = "processing" ');
    }

    static find(order_id) {
        return db.execute('SELECT * FROM customer_order WHERE order_id = ?',[order_id]);
    }

    static save(order) {
        return db.execute(
            'INSERT INTO customer_order (order_id, driver_id, assigned_date, delivery_status) VALUES (?, ?, ?, ?)',
            [order.order_id, order.driver_id, order.assigned_date, order.delivery_status]
            );
    }

    static update(order) {
        return db.execute(
            'UPDATE customer_order SET driver_id = ?, assigned_date = ?, delivery_status = ? WHERE order_id = ?',
            [order.driver_id, order.assigned_date, order.delivery_status, order.order_id ]
        );
    }
};
