import express from "express";
import path from "path";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the "dist" directory
app.use(express.static(join(__dirname, "dist")));

app.get("/resume", (req, res) => {
    const pdfPath = path.join(__dirname, "dist", "Ashish_Resume.pdf");
    res.download(pdfPath, "Ashish_Resume.pdf", (err) => {
        if (err) {
        console.error("Error sending the file:", err);
        res.status(500).send("Could not download the file.");
        }
    });
});

// Handle all other routes by serving the main index.html
app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "dist", "index.html"));
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
