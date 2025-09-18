// Configure side panel to open when extension icon is clicked
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

// Alternative: Open side panel programmatically
chrome.action.onClicked.addListener((tab) => {
    chrome.sidePanel.open({ windowId: tab.windowId });
});

// Optional: Set panel options per tab
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    await chrome.sidePanel.setOptions({
        tabId: activeInfo.tabId,
        path: 'sidepanel.html',
        enabled: true
    });
});
