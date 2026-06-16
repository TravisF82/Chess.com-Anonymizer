async function applySettings(){
    const settings = await chrome.storage.sync.get([
        "hideUsername",
        "hideRating",
        "hideAvatar",
        "hideFlag",
        "hideMembership",
    ]);
    
    document.querySelector(".cc-user-username-component")
        ?.style.setProperty(
            "display",
            settings.hideUsername ? "none" : ""
        );
        
    document.querySelector(".cc-user-rating-white")
        ?.style.setProperty(
            "display",
            settings.hideRating ? "none" : ""
        );

    document.querySelector(".player-row-avatar")
        ?.style.setProperty(
            "display",
            settings.hideAvatar ? "none" : ""
        );

    document.querySelector(".cc-country-flag-component")
        ?.style.setProperty(
            "display",
            settings.hideFlag ? "none" : ""
        );

}

chrome.runtime.onMessage.addListener(async (message) => {
    if (message.action === "settingChanged"){
        applySettings();
    }
});

const observer = new MutationObserver(() => {
    applySettings();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

applySettings();