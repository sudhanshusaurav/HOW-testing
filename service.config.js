import axios from "axios";
import { NextResponse } from "next/server";
import { env } from "process";

let ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL;
let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// let CSRF_NAME;

// CSRF_NAME = process.env.REACT_APP_CSRF;

// if (process.env.NEXT_PUBLIC_ENVIRONMENT === "DEVELOPMENT") {
//   BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
//   ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL;
// } else {
//   BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
//   ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL;
// }

export const client = axios.create({
  baseURL: BASE_URL,
  //   xsrfCookieName: CSRF_NAME,
});

export const adminClient = axios.create({
  baseURL: ADMIN_URL,
  //   xsrfCookieName: CSRF_NAME,
});

// client.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error)
//     return Promise.reject(error);
//   }
// );

// ------------------- Auth Client ------------------------------------
// export const authClient = axios.create({
//   baseURL: BASE_URL,
//   xsrfCookieName: CSRF_NAME,
// });

// authClient.interceptors.request.use(
//   function (config) {
//     if (localStorage.getItem("token")) {
//       config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// authClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (
//       error.response.status === 401 &&
//       window.location.href.includes("user") &&
//       window.location.href.substring(
//         window.location.href.lastIndexOf("/") + 1
//       ) !== "user"
//     ) {
//       window.location.href = "/user";
//     }
//     return Promise.reject(error);
//   }
// );

// export const getUploadsUrl = () => {
//   if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
//     return process.env.REACT_APP_TEST_UPLOADS_URL;
//   } else {
//     return process.env.REACT_APP_UPLOADS_URL;
//   }
// };

export const errorResponse = (message, status) => {
  return NextResponse.json(
    { error: true, message: message },
    { status: status || 500 }
  );
};

export const successResponse = (message, status, data) => {
  return NextResponse.json(
    { success: true, message: message, data: data },
    { status: status }
  );
};

export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL;
  //   if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
  //     return process.env.REACT_APP_TEST_BASE_URL;
  //   } else {
  //   }
};

export const getUrl = () => {
  return process.env.NEXT_PUBLIC_URL;
  //   if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
  //     return process.env.REACT_APP_TEST_BASE_URL;
  //   } else {
  //   }
};

export async function sendErrorToSlack(errorMessage) {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    // Send a POST request to Slack
    await axios.post(slackWebhookUrl, {
      text: `:exclamation: Error in Next.js app: ${errorMessage}`,
    });
  } catch (error) {
    console.error("Error sending message to Slack:", error.message);
  }
}
