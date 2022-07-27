export default function handler(req, res) {
  const email = req.body.email || "abc@gmail.com";
  res.status(200).json({ text: email });
}
