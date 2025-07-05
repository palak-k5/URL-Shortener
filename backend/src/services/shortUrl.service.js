import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";
import { saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUser=async (url)=>{
    const shortUrl=await generateNanoId(8);
    if(!shortUrl) throw new Error("Short Url not Generated")
    await saveShortUrl("kq5gfwsa",url)
    return shortUrl;

}
export const createShortUrlWithUser=async (url,userId)=>{
    const shortUrl=generateNanoId(8);
    await saveShortUrl(shortUrl,url,userId);
    return shortUrl;

}