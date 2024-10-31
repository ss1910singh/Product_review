// Extract the product name and price from Amazon product pages 
let productName = document.getElementById('productTitle')?.innerText.trim() || "Product Name Not Found";
let productPrice = document.getElementById('priceblock_ourprice')?.innerText ||
                   document.getElementById('priceblock_dealprice')?.innerText ||
                   "Price Not Found";

// Log the extracted data to the console
console.log("Product Name:", productName);
console.log("Product Price:", productPrice);

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getProductInfo") {
        // Send back the product name and price to the popup
        sendResponse({
            name: productName,
            price: productPrice
        });
    }
});
