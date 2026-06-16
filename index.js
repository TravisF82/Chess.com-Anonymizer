let chkAvatar = document.getElementById("hide-avatar");
let chkRating = document.getElementById("hide-rating");
let chkName = document.getElementById("hide-name");
let chkFlag = document.getElementById("hide-flag");
let chkMembership = document.getElementById("hide-membership");

const hide = "hidden";

chkName.addEventListener("change", async () => {
    await chrome.storage.sync.set({
            hideUsername: chkName.checked
        });

    const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

    chrome.tabs.sendMessage(tab.id, {
            action: "toggleUsername"
        });
});

