// Simple in-memory queue (resets if server restarts)
let queue = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    if (text) {
      queue.push(text);
      console.log("[API] Received message:", text); // logs in Vercel
    }
    res.status(200).json({ status: 'ok' });
  } else if (req.method === 'GET') {
    // Return queued messages and clear queue
    const messages = [...queue];
    queue = [];
    res.status(200).json({ messages });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
