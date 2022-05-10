// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log("This is printed to the server terminal");
    res.status(200).json({ message: "This object is sent to the frontend." });
    return;
  } else if (req.method === "POST") {
    console.log("Post request to our users endpoint.");
    const receivedData = req.body;
    console.log(receivedData);
    res.status(200).json({ message: "New user created!" });
    return;
  }
  res.status(405).json({ message: "Error: wrong request method." });
}
