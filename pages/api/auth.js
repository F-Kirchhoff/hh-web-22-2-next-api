const SUPERSECRETKEY = "password1234";

export default function handler(req, res) {
  if (req.method === "POST") {
    const receivedPassword = req.body.password;

    if (receivedPassword === SUPERSECRETKEY) {
      res.status(200).json({ message: "Success, access granted." });
    } else {
      res.status(403).json({ message: "Access denied." });
    }
    return;
  }
  res.status(405).json({ message: "Error." });
}
