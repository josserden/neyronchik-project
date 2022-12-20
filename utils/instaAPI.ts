import axios from "axios";


const postsLimit = 3;
const instagramUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${postsLimit}&access_token=${process.env.NEXT_PUBLIC_TOKEN}`;

export const fetchInstagramPosts = async () => {
  try {
    const data = await axios.get(instagramUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};