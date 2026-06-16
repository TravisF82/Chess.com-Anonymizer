let chkAvatar = document.getElementById("hide-avatar");
let chkRating = document.getElementById("hide-rating");
let chkName = document.getElementById("hide-name");
let chkFlag = document.getElementById("hide-flag");
let chkMembership = document.getElementById("hide-membership");

document.addEventListener("DOMContentLoaded", async () => {
    const settings = await chrome.storage.sync.get([
        "hideUsername",
        "hideRating",
        "hideAvatar",
        "hideFlag",
        "hideMembership",
    ]);

    chkName.checked = settings.hideUsername ?? false;
    chkRating.checked = settings.hideRating ?? false;
    chkAvatar.checked = settings.hideAvatar ?? false;
    chkFlag.checked = settings.hideFlag ?? false;
    chkMembership.checked = settings.hideMembership ?? false;
});

chkName.addEventListener("change", async () => {
    await chrome.storage.sync.set({
            hideUsername: chkName.checked
        });

    const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

    chrome.tabs.sendMessage(tab.id, {
            action: "settingChanged"
        });
});

chkRating.addEventListener("change", async () => {
    await chrome.storage.sync.set({
            hideRating: chkRating.checked
        });

    const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

    chrome.tabs.sendMessage(tab.id, {
            action: "settingChanged"
        });
});

chkAvatar.addEventListener("change", async () => {
    await chrome.storage.sync.set({
            hideAvatar: chkAvatar.checked
        });

    const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

    chrome.tabs.sendMessage(tab.id, {
            action: "settingChanged"
        });
});

chkFlag.addEventListener("change", async () => {
    await chrome.storage.sync.set({
            hideFlag: chkFlag.checked
        });

    const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

    chrome.tabs.sendMessage(tab.id, {
            action: "settingChanged"
        });
});

chkMembership.addEventListener("change", async () => {
    await chrome.storage.sync.set({
            hideMembership: chkMembership.checked
        });

    const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

    chrome.tabs.sendMessage(tab.id, {
            action: "settingChanged"
        });
});

