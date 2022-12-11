export interface Call {
  callback_requested: boolean;
  created_at: string;
  customer: {
    account_number: string;
    contact_info: string;
    id: string;
    location: string;
    name: string;
    preferences: {
      sms: boolean;
    };
  };
  customer_id: string;
  faqs: Faq[];
  feedback: string;
  id: string;
  language: string;
  problems: Problem[];
  recordings: Recording[];
  solutions: Solution[];
  status: string;
  transcript_requested: boolean;
  transfer_requested: boolean;
  updated_at: string;
  voicemail_left: boolean;
}