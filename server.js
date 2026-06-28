const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Email Sender Route

app.post("/send-message", async (req, res) => {

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "YOUR_EMAIL@gmail.com",
                pass: "YOUR_APP_PASSWORD"
            }
        });

        const mailOptions = {
            from: "YOUR_EMAIL@gmail.com",
            to: "YOUR_EMAIL@gmail.com",
            subject: "New Portfolio Message",
            text: "Someone sent you a message from your portfolio website."
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send("Email Sent");

    } catch (err) {

        console.log(err);
        res.status(500).send("Error");

    }

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});