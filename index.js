import { config } from "dotenv";
config();

import { SocialFi } from "socialfi";

const API_URL = "https://api.usetapestry.dev/api/v1/";
const API_KEY = process.env.TAPESTRY_API_KEY;

const client = new SocialFi({
  baseURL: API_URL,
  apiKey: API_KEY,
});

async function createProfile() {
  try {
    const profile = await client.profiles.findOrCreateCreate(
      {
        apiKey: API_KEY,
      },
      {
        walletAddress: "8QdiVyJK2emtQdb9gi9dndxrRqKYKU5ZGn62hpiwvWWw",
        username: "johndoe",
        bio: "Hello World! This is my first Tapestry profile.",
        blockchain: "SOLANA",
        contact: {
          id: "111",
          type: "EMAIL",
          bio: "",
          image: "",
        },
        execution: "FAST_UNCONFIRMED",
      }
    );
    console.log("Profile created:", profile);
  } catch (error) {
    console.error("Error creating profile:", error);
  }
}

createProfile();
