const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlRoutes = require("./routes/urlRoutes");
const Url = require("./model/urlModel");
const PORT = 8001;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/url_short", ({
})).then(()=>{
    console.log("mongodb connected");
}).catch((e)=>{
    console.log("not connected", e);
});

app.use("/url", urlRoutes);

app.get('/:shortId', async(req, res)=>{
    const shortId = req.params.shortId;
   const entry = await Url.findOneAndUpdate(
    {
        shortId,
    },
    {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    }
   )
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, ()=>{
    console.log(`Server is run port ${PORT}`);
});