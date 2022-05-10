export default function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.query.locationId;
    console.log(`A delete request was made for location ${id}.`);
    res.status(200).send("Success");
    return;
  }
  res.status(405).send("Error: wrong request method.");
}
