let queue = [];

export default function handler(req, res) {
  if(req.method === "POST"){
    const { text } = req.body;
    if(text){
      queue.push(text);
      console.log("[API] Received:", text);
    }
    res.status(200).json({status:'ok'});
  } else if(req.method === "GET"){
    const msgs = [...queue]; queue=[];
    res.status(200).json({messages: msgs});
  } else { res.status(405).json({error:'Method not allowed'}); }
}
