const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    let deferredPrompt = event;
  
   const buttonInstall = document.getElementById('buttonInstall'); 
   buttonInstall.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the before install prompt');
        } else {
          console.log('User dismissed the  before install prompt');
        }
        deferredPrompt = null;
      });
    });
  });
  

// TODO: Implement a click event handler on the `butInstall` element
window.addEventListener('butInstall', (event) => {
    event.preventDefault();
    let deferredPrompt = event;

    const butInstall = document.getElementById('butInstall');
    butInstall.addEventListener('click', async () => {
        if (choiceResult.outcome === 'accepted') {
            console,log('User accepted but install prompt');
        } else {
            console.log('Failed to accept but install prompt');
        }
        deferredPrompt = null;
    });
})

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    let deferredPrompt = event;

    const appinstalled = document.getElementById('appinstalled');
    appinstalled.addEventListener('click', async () => {
        if (choiceResult.outcome === 'accepted') {
            console.log(' User accepted app install prompt');
        } else {
            console.log('User failed app install prompt');
        }
        deferredPrompt = null;
});
})
