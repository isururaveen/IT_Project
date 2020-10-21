export interface Order {
    order_id: number;
    driver_id: number;
    assigned_date: Date;
    delivery_status: string;
    customer_name: string;
}
