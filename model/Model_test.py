import requests

# Set the URL for the prediction endpoint
url = 'http://127.0.0.1:5000/predict'

# Get user input for the review text
review_text = input("Enter your review: ")

# Define the review data
review_data = {
    "review": review_text
}

# Send a POST request to the Flask server
response = requests.post(url, json=review_data)

# Print the response from the server
print("Response from server:")
print(response.json())
