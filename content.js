async function applySettings(){
    const settings = await chrome.storage.sync.get([
        "hideUsername"
    ]);

    document.querySelector(".cc-user-username-component")
        ?.style.setProperty(
            "display",
            settings.hideUsername ? "none" : ""
        );


}

chrome.runtime.onMessage.addListener(async (message) => {
    
});

const observer = new MutationObserver(() => {
    applySettings();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

applySettings();