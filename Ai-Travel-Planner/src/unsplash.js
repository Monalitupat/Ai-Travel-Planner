// src/unsplash.js
import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchUnsplashImage = async (query) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: 1,
        orientation: "landscape",
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    const results = response.data.results;
    return results.length > 0 ? results[0].urls.regular : "/default-image.jpg";
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
    return "/default-image.jpg";
  }
};
