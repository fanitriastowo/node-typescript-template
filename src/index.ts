import express from "express";

const PORT = 8011;
const app = express();

app.get("/", async (req, res) => {
    res.send("success");
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
