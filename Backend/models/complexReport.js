const db = require('../util/database');

module.exports = class complexReport  {
    constructor
    (order_id, driver_id, delivery_status, customer_name, city, postal_code, item_number, qty, total, address, phone_num, email) 
        {
            this.order_id = order_id;
            this.driver_id = driver_id;
            this.delivery_status = delivery_status;
            this.customer_name = customer_name;
            this.city = city;
            this.postal_code = postal_code;

            this.phone_num = phone_num;
            this.email = email;
            this.address = address;
        
            this.qty = qty;
            this.total = total;
            this.item_number = item_number;
        }

    static find(id) {
        return db.execute (
            'SELECT customer_order.order_id, customer_order.street, customer_order.city, customer_order.postal_code, customer_order.delivery_status, customer_order.driver_id, customer_order.assigned_date, customer_order.customer_name, customer.phone_num, customer.email, customer.address, cart.qty, cart.item_number, cart.total FROM customer_order INNER JOIN customer ON customer_order.customer_id = customer.customer_id INNER JOIN cart ON customer.customer_id = cart.customer_id WHERE customer_order.order_id=?',[id]
        );
    }

    static fetchAll () {
        return db.execute(
            'SELECT * FROM customer_order  '
            );
    }
}

