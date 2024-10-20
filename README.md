# Product Review Analysis with Browser Extension

## Overview

This project aims to develop a comprehensive solution for analyzing product reviews on Amazon. It consists of a browser extension that fetches product URLs, scrapes relevant data from the Amazon product page, and utilizes a machine learning model to predict whether the reviews are genuine or fake. The workflow includes several key stages: data preparation, feature engineering, model training and evaluation, and deployment via a Flask web application. This solution enables users to make informed decisions about product authenticity by leveraging machine learning techniques.

## Table of Contents

1. [Libraries Used](#libraries-used)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Model Description](#model-description)
6. [File Descriptions](#file-descriptions)
7. [Future Improvements](#future-improvements)

## Libraries Used

This project utilizes several Python libraries to handle data processing, machine learning, web scraping, and API development:

- **Flask**: A lightweight web framework for building web applications and APIs in Python. It is used to create an endpoint for the machine learning model.
- **Pandas**: A powerful data manipulation and analysis library that provides data structures like DataFrames to handle and analyze structured data efficiently.
- **NumPy**: A fundamental package for numerical computing in Python, used for handling arrays and mathematical operations.
- **Scikit-learn**: A comprehensive library for machine learning that provides tools for model training, evaluation, and various machine learning algorithms.
- **BeautifulSoup**: A library for web scraping that allows for parsing HTML and XML documents. It is used to extract product and review data from Amazon pages.
- **Requests**: A simple and elegant HTTP library for Python. It is used to make requests to web pages to fetch their content.
- **Joblib**: A library used for serializing Python objects, particularly for saving and loading trained machine learning models and transformers.
- **Matplotlib**: A plotting library used for creating static, animated, and interactive visualizations in Python.

## Project Structure

The project follows a well-organized structure that separates different components for better manageability:

```
/product_review_analysis
│
├── /data                  # Contains raw and processed data files
│   ├── cleaned_reviews_nltk.csv  # Cleaned review data for analysis
│   ├── feature_data.csv   # Features extracted from the cleaned data
│
├── /models                # Contains trained models for prediction
│   ├── pro_rev_ana_model.pkl    # The trained Random Forest model
│   ├── tfidf_vectorizer.pkl      # The TF-IDF vectorizer used for text processing
│
├── /notebooks             # Jupyter notebooks for data processing and model handling
│   ├── data_preparation.ipynb      # Notebook for data cleaning and preparation
│   ├── feature_engineering.ipynb    # Notebook for feature extraction
│   ├── model_evaluation.ipynb       # Notebook for model training and evaluation
│   ├── model_deployment.ipynb       # Notebook for deploying the model using Flask
│   ├── scrape_data.ipynb            # Notebook for scraping data from Amazon
│
├── /extension             # Contains files for the browser extension
│   ├── manifest.json      # Configuration file for the browser extension
│   ├── background.js       # JavaScript file for handling background processes
│   ├── popup.html         # HTML file for the extension's popup interface
│
└── README.md              # Project documentation
```

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the Repository**: 
   Clone this repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   cd product_review_analysis
   ```

2. **Install Required Libraries**: 
   Use `pip` to install the required libraries listed in the `requirements.txt` file. You can create a virtual environment to manage dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. **Ensure Browser Extension Support**: 
   For the browser extension, ensure you have access to a supported browser (e.g., Chrome or Firefox) for loading unpacked extensions.

## Usage

1. **Run the Flask API**: 
   Navigate to the `notebooks` directory and run the `model_deployment.ipynb` to start the Flask server. This server will handle incoming requests for predictions.

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

The project employs a **Random Forest Classifier**, a robust machine learning algorithm known for its accuracy and ability to handle high-dimensional data. The model is trained on a dataset of Amazon product reviews. It predicts whether a review is genuine or fake based on various extracted features from the review text, including:

- TF-IDF scores: Represents how important a word is to a document in a collection.
- Sentiment analysis scores: Captures the sentiment conveyed in the review text.
- Review metadata: Includes ratings and other contextual information.

## File Descriptions

- **data_preparation.ipynb**: Cleans and preprocesses raw review data to prepare it for analysis. This includes handling missing values, removing irrelevant information, and normalizing text data.
- **feature_engineering.ipynb**: Extracts relevant features from the cleaned data using TF-IDF vectorization, transforming text data into numerical format for machine learning.
- **model_evaluation.ipynb**: Trains the Random Forest model using the prepared features and evaluates its performance using metrics such as accuracy, precision, recall, and F1 score. It also visualizes the results through confusion matrices.
- **model_deployment.ipynb**: Sets up a Flask API to serve predictions from the trained model. This notebook contains the code to load the model and vectorizer and define API endpoints for prediction requests.
- **scrape_data.ipynb**: Scrapes product information and customer reviews from Amazon product pages using BeautifulSoup. It extracts essential details like product title, feature bullets, and customer reviews for analysis.
- **extension/**: Contains files for the browser extension that fetches product URLs, allowing users to analyze reviews directly from their browsers.

## Future Improvements

- **Enhance Web Scraping**: Improve the scraping functionality to include more product details and handle different page structures more robustly.
- **Model Comparison**: Implement additional machine learning models (e.g., SVM, Gradient Boosting) and compare their performance with the Random Forest model to identify the best approach.
- **User Interface**: Create a user-friendly web interface for direct interaction with the model, allowing users to input reviews and receive predictions without using Postman.
- **Extension Features**: Add features to the browser extension, such as displaying predictions directly on Amazon product pages or saving predictions for later review.
