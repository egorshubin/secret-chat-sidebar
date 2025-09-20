// Get DOM elements
const iframe = document.getElementById('sidebar-iframe');
const refreshBtn = document.getElementById('refresh-btn');
const errorMessage = document.getElementById('error-message');
const loadingIndicator = document.getElementById('loading-indicator');

// Show loading state
function showLoading() {
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none';
    iframe.style.display = 'none';
}

// Show error state
function showError() {
    loadingIndicator.style.display = 'none';
    errorMessage.style.display = 'block';
    iframe.style.display = 'none';
}

// Show iframe
function showIframe() {
    loadingIndicator.style.display = 'none';
    errorMessage.style.display = 'none';
    iframe.style.display = 'block';
}

// Handle iframe load events
iframe.addEventListener('load', () => {
    // Check if iframe loaded successfully
    try {
        // Try to access iframe content (will fail for cross-origin)
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        showIframe();
    } catch (e) {
        // Cross-origin, but assume it loaded if we get here
        showIframe();
    }
});

// Handle iframe error
iframe.addEventListener('error', () => {
    showError();
});

// Initial load
showLoading();

// Refresh button functionality
refreshBtn.addEventListener('click', () => {
    showLoading();
    iframe.src = iframe.src; // Reload iframe
});

// Set timeout for initial load
setTimeout(() => {
    if (iframe.style.display === 'none' &&
        loadingIndicator.style.display === 'block') {
        showError();
    }
}, 5000);

// Optional: Listen for messages from the iframe
window.addEventListener('message', (event) => {
    // Verify origin for security
    if (event.origin !== 'http://localhost:5173') return;

    // Handle messages from your localhost app
    console.log('Message from iframe:', event.data);
});

// Optional: Communicate with active tab
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs[0]) {
        console.log('Side panel opened for:', tabs[0].url);
    }
});
