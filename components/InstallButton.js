import { useState, useEffect } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [show, setShow] = useState(true)
  useEffect(() => {
  if(!window) return null
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setIsInstallable(false);
        setShow(false)
      });
    }
  };

  if (!isInstallable) {
  
   return null; // Don't render the button if the app is not installable
  }

  return (
   <div className={show ? "install" : "installHide"}>
    <button onClick={handleInstallClick} className="install-button">
      Install DailyMinderApp
    </button>
   </div>
  );
};

export default InstallButton;
