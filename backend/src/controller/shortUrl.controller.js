import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res,next) => {
  let { url } = req.body;
  console.log("Received URL:", url);

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Add https if missing
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  try {
    // Call your service to create and save the short URL
    const shortId = await createShortUrlWithoutUser(url);

    res.status(201).json({
      message: "Short URL created successfully",
      short_url: `${process.env.APP_URL}${shortId}`,
    });
  } catch (error) {
    next(error);
    // console.error("Error creating short URL:", error);
    // res.status(500).json({ error: "Internal server error" });
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