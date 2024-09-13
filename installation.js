let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall'); 
installButton.addEventListener('click', installPWA);


window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
deferredInstallPrompt = evt;
installButton.removeAttribute('hidden'); 
}


function installPWA(evt) {
   deferredInstallPrompt.prompt();
   evt.srcElement.setAttribute('hidden', true);

   deferredInstallPrompt.userChoice
    .then((choice) => {
        if (choice.outcome === 'accepted') {
            console.log('user accepted A2HS prompt', choice);
        } else {
            console.log('user dismissed the A2HS prompt', choice);
        }
        deferredInstallPrompt = null;
    });
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log('Taste Buds App was installed', evt);
}


    
  