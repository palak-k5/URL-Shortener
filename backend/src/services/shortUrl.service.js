import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUser=async (url)=>{
    const shortUrl=await generateNanoId(8);
    if(!shortUrl) throw new Error("Short Url not Generated")
    await saveShortUrl(shortUrl,url)
    return shortUrl;

}
export const createShortUrlWithUser=async (url,userId,slug=null)=>{
    const shortUrl=slug ||generateNanoId(8);
    const exists=await getCustomShortUrl(slug);
    if(exists) throw new Error("This custom url already exists")
    await saveShortUrl(shortUrl,url,userId);
    return shortUrl;

}