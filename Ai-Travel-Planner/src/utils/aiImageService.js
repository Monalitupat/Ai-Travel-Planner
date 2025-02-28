import axios from "axios";

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key

export const fetchAIImage = async (location) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: "dall-e-2", // Use "dall-e-3" if available
        prompt: `A beautiful, realistic image of ${location}, highlighting its unique landmarks and scenery.`,
        n: 1,
        size: "1024x1024", // Change size as needed
      },
      {
        headers: {
          Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data[0]?.url || null;
  } catch (error) {
    console.error("Error generating AI image:", error);
    return null;
  }
};
