import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js";
import wrapAsync from '../utils/tryCatchWrapper.js';

export const createShortUrl = async (req, res, next) => {
  let data = req.body;
  console.log("Received URL:", data.url);
console.log("User:", req.user); // <- this is either missing or not defined yet

  if (!data.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Add https if missing
  if (!/^https?:\/\//i.test(data.url)) {
    data.url = "https://" + data.url;
  }

  try {
    let shortId;
    if (!req.user) {
      shortId = await createShortUrlWithoutUser(data.url);
    } else {
      shortId = await createShortUrlWithUser(data.url, req.user._id,data.slug);
    }

    res.status(201).json({
      message: "Short URL created successfully",
      short_url: `${process.env.APP_URL}${shortId}`,
    });
  } catch (error) {
    next(error);
  }
};


export const redirectFromShortUrl =async (req, res,next) => {
  const { id } = req.params;    
  console.log(id);
  try {
    const urlData = await getShortUrl(id);
    if (!urlData) {   
      return res.status(404).json({ error: 'URL not found' });
    }
    res.redirect(urlData.full_url);
  } 
  catch (error) {
    console.error('Error fetching URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUser(url,customUrl)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})