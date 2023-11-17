// TODO: Add an event handler to the `beforeinstallprompt` event 
const butInstall = document.getElementById('butInstall');
window.addEventListener('beforeinstallprompt', async (event) => {
  event.preventDefault();
window.deferredPrompt = event;
butInstall.classList.toggle("hidden",false)
    // const choiceResult = await deferredPrompt.userChoice;

    // if (choiceResult.outcome === 'accepted') {
    //     console.log('User accepted but install prompt');
    // } else {
    //     console.log('Failed to accept but install prompt');
    // }
    // deferredPrompt = null;
});
  

// TODO: Implement a click event handler on the `butInstall` element
// window.addEventListener('butInstall', (event) => {
//     event.preventDefault();
//     let deferredPrompt = event;


butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt
  if (
    !promptEvent
  ) {
    return; 
  }
  promptEvent.prompt ()
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden",true)
    // const choiceResult = await deferredPrompt.userChoice;
    // if (choiceResult.outcome === 'accepted') {
    //     console.log('User accepted but install prompt');
    // } else {
    //     console.log('Failed to accept but install prompt');
    // }
    // deferredPrompt = null;
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
  // event.preventDefault();
  // const choiceResult = event;
  // if (choiceResult.outcome === 'accepted') {
  //     console.log('User accepted app install prompt');
  // } else {
  //     console.log('User failed app install prompt');
  // }
  // deferredPrompt = null;
});
