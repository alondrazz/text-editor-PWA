// TODO: Add an event handler to the `beforeinstallprompt` event
const butInstall = document.getElementById('butInstall');
let deferredPrompt; // Define deferredPrompt outside the event listeners

butInstall.addEventListener('click', async () => {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
        console.log('User accepted but install prompt');
    } else {
        console.log('Failed to accept but install prompt');
    }
    deferredPrompt = null;
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
// window.addEventListener('appinstalled', (event) => {
//     event.preventDefault();
//     let deferredPrompt = event;

    const appinstalled = document.getElementById('appinstalled');
    appinstalled.addEventListener('appinstalled', async () => {
        if (choiceResult.outcome === 'accepted') {
            console.log(' User accepted app install prompt');
        } else {
            console.log('User failed app install prompt');
        }
        deferredPrompt = null;
});

