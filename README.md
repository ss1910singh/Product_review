# Product Review Analysis with Browser Extension

## Overview

This project develops a solution for analyzing Amazon product reviews, including a browser extension that fetches product URLs, scrapes relevant data from the Amazon page, and uses a machine learning model to predict whether reviews are genuine or fake. The project workflow covers stages like data preparation, feature engineering, model training and evaluation, and deployment via a Flask web application. This solution allows users to make informed decisions about product authenticity with machine learning techniques.

## Table of Contents

1. [Libraries Used](#libraries-used)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Model Description](#model-description)
6. [File Descriptions](#file-descriptions)
7. [Model Comparison](#model-comparison)
8. [Future Improvements](#future-improvements)

## Libraries Used

This project uses Python libraries for data processing, machine learning, web scraping, and API development:

- **Flask**: Creates an endpoint for the machine learning model.
- **Pandas**: Manages and analyzes structured data efficiently.
- **NumPy**: Handles arrays and mathematical operations.
- **Scikit-learn**: Provides tools for model training, evaluation, and various machine learning algorithms.
- **BeautifulSoup**: Parses HTML and XML documents to extract data from Amazon.
- **Requests**: Fetches content from web pages.
- **Joblib**: Saves and loads trained machine learning models and transformers.
- **Matplotlib**: Creates static and interactive visualizations.

## Project Structure

This project is organized into separate components for easy manageability:

```
/product_review_analysis
│
├── /data                  # Contains raw and processed data files
│   ├── cleaned_reviews_nltk.csv    # Cleaned review data for analysis
│   ├── feature_data.csv           # Features extracted from the cleaned data
│
├── /model                 # Contains Jupyter notebooks and code for model processing
│   ├── data_preparation.ipynb     # Notebook for data cleaning and preparation
│   ├── feature_engineering.ipynb  # Notebook for feature extraction
│   ├── model_evaluation.ipynb     # Notebook for model training and evaluation
│   ├── model_deployment.ipynb     # Notebook for deploying the model using Flask
│   ├── scrape_data.ipynb          # Notebook for scraping data from Amazon
│
├── /extension_code        # Contains files for the browser extension
│   ├── manifest.json          # Configuration file for the browser extension
│   ├── background.js          # Background process handler for the extension
│   ├── content.js             # Script for scraping Amazon review data
│   ├── popup.html             # HTML file for the extension popup interface
│   ├── popup.js               # JavaScript for handling popup actions
│
└── README.md                  # Project documentation
```

> **Note:** The `model` folder contains the notebooks for processing the model, but the trained model files will be generated automatically when these notebooks are run and are not included in the repository.

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the Repository**: 
   Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/ss1910singh/Review_Classifier.git
   cd product_review_analysis
   ```

2. **Install Required Libraries**: 
   Use `pip` to install the required libraries listed in the `requirements.txt` file. You may want to create a virtual environment to manage dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. **Ensure Browser Extension Support**: 
   For the browser extension, make sure you have a supported browser (like Chrome or Firefox) for loading unpacked extensions.

## Usage

1. **Run the Flask API**: 
   Navigate to the `model` directory and run `model_deployment.ipynb` to start the Flask server. This server will handle incoming requests for predictions.

2. **Access the API**:
   - Open Postman (or your preferred API testing tool).
   - Create a new POST request to `http://127.0.0.1:5000/predict`.
   - In the request body, set the format to JSON and enter the following structure:

   ```json
   {
       "review": "Your review text here."
   }
   ```

3. **View Prediction Results**: 
   The API will return a prediction indicating whether the review is a "Fake Review" or "Real Review". The response will be in JSON format:

   ```json
   {
       "prediction": "Fake Review"
   }
   ```

## Model Description

The project initially employed a **Random Forest Classifier** to predict whether a review is genuine or fake based on various extracted features from the review text, such as:

- **TF-IDF scores**: Quantifies word importance within the review text.
- **Sentiment analysis scores**: Captures the sentiment conveyed in the review.
- **Review metadata**: Includes ratings and other contextual information.

## Model Comparison

The best model is selected by comparing multiple machine learning algorithms. The evaluated models include:

- **Random Forest Classifier**
- **Logistic Regression**
- **Support Vector Machine (SVM)**
- **Gradient Boosting Classifier**

Each model was trained and tested on the dataset, and the best-performing model was saved as `best_pro_rev_ana_model.pkl`.

## File Descriptions

- **data_preparation.ipynb**: Cleans and preprocesses raw review data.
- **feature_engineering.ipynb**: Extracts relevant features from the cleaned data.
- **model_evaluation.ipynb**: Trains and compares models, evaluates them with metrics like accuracy, precision, recall, and F1 score.
- **model_deployment.ipynb**: Sets up a Flask API to serve predictions from the selected model.
- **scrape_data.ipynb**: Scrapes product information and customer reviews from Amazon.

### Extension Code Files

- **manifest.json**: Configures the Chrome extension.
- **background.js**: Handles background events in the extension.
- **content.js**: Scrapes review data from Amazon pages.
- **popup.html**: HTML for the extension popup interface.
- **popup.js**: JavaScript for popup functionality.

## Future Improvements

- **Enhanced Web Scraping**: Improve the scraping to include additional product details.
- **Expanded Model Comparison**: Explore additional machine learning models and neural networks to improve accuracy.
- **User Interface**: Develop a user-friendly web UI for the model to allow easy review predictions.
- **Extension Features**: Add features to the extension, such as displaying predictions directly on Amazon pages.