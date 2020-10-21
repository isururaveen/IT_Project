export interface ComplexReport {
    order_id: number;
    driver_id: number;
    delivery_status: string;
    customer_name: string;
    item_number: number;
    city: string;
    postal_code: number;
    phone_num: number;
    email: string;
    address: string;
    qty: number;
    total: number;
    assigned_date: Date;
}
