import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { Call } from '../../../model';

interface CallProps {
  call: Call;
}

export function CallCard({ call }: CallProps) {
  return (
    <Card>
      <CardHeader title={`Call ID: ${call.id}`} />
      <CardContent>
        <Typography variant="h5">Created at: {call.created_at}</Typography>
        <Typography variant="h5">Language: {call.language}</Typography>
        <Typography variant="h5">
          Callback requested: {call.callback_requested ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="h5">
          Transcript requested: {call.transcript_requested ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="h5">
          Transfer requested: {call.transfer_requested ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="h5">Voicemail left: {call.voicemail_left ? 'Yes' : 'No'}</Typography>
        <Typography variant="h5">Sentiment: {call.sentiment}</Typography>

        {call.problems.length > 0 && (
          <>
            <Typography variant="h5">Problems:</Typography>
            <List>
              {call.problems.map((problem) => (
                <ListItem key={problem.id}>
                  <ListItemText primary={problem.summary} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {call.solutions.length > 0 && (
          <>
            <Typography variant="h5">Solutions:</Typography>
            <List>
              {call.solutions.map((solution) => (
                <ListItem key={solution.id}>
                  <ListItemText primary={solution.summary} secondary={solution.description} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {call.faqs.length > 0 && (
          <>
            <Typography variant="h5">FAQs:</Typography>
            <List>
              {call.faqs.map((faq) => (
                <ListItem key={faq.id}>
                  <ListItemText primary={faq.question} secondary={faq.answer} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default CallCard;
