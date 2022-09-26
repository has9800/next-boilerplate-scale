import { withSentry } from '@sentry/nextjs';

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ name: 'Data fetched frm endpoint using SWR' });
      break;
  }
}

export default withSentry(handler);
