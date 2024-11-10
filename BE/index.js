require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const ContactUs = require("./repository/ContactUs");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/contactus", async (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;
  const contactUs = new ContactUs(name, email, subject, message);

  try {
    await contactUs.save();

  }catch (error) {
    console.error("Error saving contact us", error);
    res.status(500).send({
      message: "An error occurred. Please try again later.",
    });
  }
  res.send({
    message: "Thank you for contacting us. We will get back to you soon.",
  });
});

app.listen(port, () => {
  console.log(`cryo.api listening at http://localhost:${port}`);
});
