const express= require("express");
const {connectToDatabase}=require('./connection')
const app=express();
const URL=require('./models/url');
app.use(express.json());

const urlRoutes=require('./routes/url');
const port=8001;


connectToDatabase('mongodb://localhost:27017/short-url')
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err=>console.error('Failed to connect to MongoDB', err));


app.use("/url",urlRoutes);
app.get("/", (req, res) => {
  res.send("URL Shortener API is working");
});
app.get("/:shortId", async (req, res) => {
  const shortID = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId: shortID }, // ✅ Note: you had a typo here, it should be shortId (lowercase 'd')
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectURL);
});


app.listen(port,()=>console.log(`Server is running on port ${port}`));