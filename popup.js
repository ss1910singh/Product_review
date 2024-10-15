document.getElementById('checkButton').addEventListener('click', () => {
    // Get the active tab and send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getProductInfo" }, (response) => {
        if (response && response.name && response.price) {
          // Log the product info received from the content script
          console.log("Product Info from Content Script:", response);
          
          // Display the product info in the popup
          document.getElementById('result').innerText = `Product: ${response.name}\nPrice: ${response.price}`;
  
          // Send the product data to the background for further analysis
          chrome.runtime.sendMessage({
            action: "fetchProductInfo",
            data: {
              name: response.name,
              price: response.price
            }
          }, (backgroundResponse) => {
            // Log the response from the background script
            console.log("Background Script Response:", backgroundResponse);
  
            // Display the analysis result returned by the background script
            document.getElementById('result').innerText += `\n\nAnalysis: ${backgroundResponse.message}`;
          });
        } else {
          console.log("Failed to fetch product details.");
          document.getElementById('result').innerText = "Failed to fetch product details.";
        }
      });
    });
  });
  