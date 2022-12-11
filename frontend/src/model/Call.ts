import axios from 'axios';
import { Faq } from './Faq';
import { Problem } from './Problem';
import { Recording } from './Recording';
import { Solution } from './Solution';
import { Customer } from './Customer';

export interface Call {
  callback_requested: boolean;
  created_at: string;
  customer: Customer;
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

export function fetchAllCalls(): Promise<Call[]> {
  const url = 'http://18.156.36.216:4999/call/list';
  return axios
    .get(url)
    .then((response) => response.data)
    .then((calls: Call[]) => {
      return calls.map((data) => {
        const call: Call = {
          callback_requested: data.callback_requested,
          created_at: data.created_at,
          customer: data.customer,
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
          voicemail_left: data.voicemail_left,
          sentiment: data.sentiment,
        };
        return call;
      });
    });
}
