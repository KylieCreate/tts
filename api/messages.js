let messages = [];

export default function handler(req, res) {
    if (req.method === "POST") {
        const { text } = req.body;
        messages.push(text);
        return res.status(200).json({ ok: true });
    } else if (req.method === "GET") {
        const msgs = [...messages];
        messages = [];
        return res.status(200).json({ messages: msgs });
    }
}
