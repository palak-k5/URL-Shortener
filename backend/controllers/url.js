const shortid=require('shortid');
const URL=require('../models/url');
async function handleGenerateNewShortURL(req,res)
{
    const body=req.body;
    console.log('Received body:', req.body);

    // if(!body.URL )
    // {
    //     return res.status(400).json({error:"URL is required"});
    // }
    if(!body.url) {
        return res.status(400).json({error: "Invalid URL format. Please provide a valid URL "});
    }
    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
    })
    return res.status(201).json({id:shortId});
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
  const entry = await URL.findOne({ shortId });

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.status(200).json({
    totalClicks: entry.visitHistory.length,
    visitHistory: entry.visitHistory,
  });
}
module.exports={handleGenerateNewShortURL, handleGetAnalytics}