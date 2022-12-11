import {Faq} from "./Faq";
import {Problem} from "./Problem";
import {Recording} from "./Recording";
import {Solution} from "./Solution";


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
  sentiment: number;
}

//Answer
function fetchAllCalls(): void {
    const url = 'http://127.0.0.1:4999';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let call: Call = {
                callback_requested: data.callback_requested,
                created_at: data.created_at,
                customer: {
                    account_number: data.customer.account_number,
                    contact_info: data.customer.contact_info,
                    id: data.customer.id,
                    location: data.customer.location,
                    name: data.customer.name,
                    preferences: {
                        sms: data.customer.preferences.sms
                    }
                },
                customer_id: data.customer_id,
                faqs: data.faqs,
                feedback: data.feedback,
                id: data.id,
                language: data.language,
                problems: data.problems,
                recordings: data.recordings,
                solutions: data.solutions,
                status: data.status,
                transcript_requested: data.transcript_requested,
                transfer_requested: data.transfer_requested,
                updated_at: data.updated_at,
                voicemail_left: data.voicemail_left
            };
            console.log(call);
        });
}