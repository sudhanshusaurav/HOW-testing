import React, { useEffect, useState } from "react";
import "firebase/messaging";
import { toast } from "react-toastify";
import { getMessaging, onMessage } from "firebase/messaging";
import { storeFcmToken } from "@/pages/api/CommonServices";
import Image from "next/image";
import Link from "next/link";
import localforage from "localforage";
import { useRouter } from "next/navigation";
import { firebaseCloudMessaging } from "@/utils/firebase";

function PushNotificationLayout({ children }) {
  const router = useRouter();

  const [requested, setRequested] = useState(false);

  // Calls the getMessage() function if the token is there
  async function setToken() {
    if (typeof window !== "undefined" && "Notification" in window) {
      try {
        const token = await firebaseCloudMessaging.init();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        if (token && token !== tokenInLocalForage) {
          storeFcmToken({ device_token: token })
            .then((res) => {
              localforage.setItem("fcm_token", token);
            })
            .catch((err) => {
              // console.log(err);
            });
          getMessage();
        }
      } catch (error) {
        // console.log(error);
      }
    }

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        // console.log("event for the service worker", event);
      });
    }
  }

  useEffect(() => {
    if (!requested) {
      setToken();
      setRequested(true);
    }
  });

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url) => {
    router.push(url);
  };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = getMessaging();
    onMessage(messaging, (message) => {
      toast(
        <div onClick={() => handleClickPushNotification(message?.data?.url)}>
          <div className="flex items-start gap-4">
            <img src={message?.data?.icon} alt="" width={50} height={40} />
            <div className="grow">
              <h5>{message?.data?.title}</h5>
              <h6>{message?.data?.body}</h6>
              {message?.data?.image && (
                <Image
                  src={message?.data?.image}
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  alt=""
                />
              )}
              {message?.data?.button_title && (
                <div className="my-2">
                  <Link
                    href={`${message?.data?.button_title}`}
                    className="rounded-lg bg-gray-100 px-4 py-1 shadow-md"
                  >
                    {message?.data?.button_title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
  }

  return <>{children}</>;
}

export default PushNotificationLayout;
