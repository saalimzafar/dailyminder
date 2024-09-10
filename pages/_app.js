//import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { useEffect } from "react";
import { requestPersistentStorage } from '../utils';

function MyApp({ Component, pageProps }) {

useEffect(() => {
    const handleStorage = async () => {
      const { granted, persisted } = await requestPersistentStorage();
      // You can use the granted and persisted values here as needed
      console.log('Persistent storage granted:', granted);
      console.log('Storage is persistently stored:', persisted);
    };

    handleStorage();
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
     {/* <Analytics />*/}
    </>
  );
}

export default MyApp;
