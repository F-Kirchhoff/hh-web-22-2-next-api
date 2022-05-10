export default function handler(req, res) {
  if (req.method === "GET") {
    const userId = req.query.userId;
    console.log(`A request was made for user ${userId}.`);
    res.status(200).send("Success");
    return;
  }
  res.status(405).send("Error: wrong request method.");
}
