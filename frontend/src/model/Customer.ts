export interface Customer {
    account_number: string;
    contact_info: string;
    id: string;
    location: string;
    name: string;
    preferences: {
        sms: boolean;
    }
}