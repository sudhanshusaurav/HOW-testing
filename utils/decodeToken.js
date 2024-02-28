import { jwtVerify } from "jose";

const TOKEN_SECRET = new TextEncoder().encode(process.env.TOKEN_SECRET);

export default async function decodeToken(token) {
  try {
    const { payload } = await jwtVerify(token, TOKEN_SECRET);

    return payload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
