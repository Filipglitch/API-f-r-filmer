const express = require("express");
const path = require("path");

const app = express();
const PORT = 5080;

app.use(express.static(path.join(__dirname, "public")));


app.get("/api/movies", async (req, res) => {
  try {
    const response = await fetch(
      "https://plankton-app-xhkom.ondigitalocean.app/api/movies"
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("API FEL:", err);
    res.status(500).json({ error: "Kunde inte hämta filmer" });
  }
});


app.get("/api/movies/:id", async (req, res) => {
  try {
    const response = await fetch(
      `https://plankton-app-xhkom.ondigitalocean.app/api/movies/${req.params.id}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("API FEL:", err);
    res.status(500).json({ error: "Kunde inte hämta film" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
