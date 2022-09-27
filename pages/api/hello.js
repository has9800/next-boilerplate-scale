import { withSentry } from '@sentry/nextjs';
import axios from 'axios';

async function handler(req, res) {
  if (req.method === 'GET') {
    await axios
      .get('https://jsonplaceholder.typicode.com/users?id=1')
      .then(({ data }) => {
        res.status(200).json({ data });
      })
      .catch(({ err }) => {
        res.status(400).json({ err });
      });
  }
}

export default withSentry(handler);
