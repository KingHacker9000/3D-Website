import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the "dist" directory
app.use(express.static(join(__dirname, "dist")));

// Handle all other routes by serving the main index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
