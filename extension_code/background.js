// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchProductInfo") {
        const productInfo = request.data;

        // Send the product data to the Flask backend for analysis
        fetch('http://127.0.0.1:5000/analyze', {  // Update this URL if your backend is hosted elsewhere
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                sendResponse({ status: 'success', message: data.message });
            } else {
                sendResponse({ status: 'error', message: data.message });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            sendResponse({ status: 'error', message: 'Failed to fetch data from the server' });
        });

        // Indicate that sendResponse will be called asynchronously
        return true; 
    }
});
