import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)
model = joblib.load('best_pro_rev_ana_model_GradientBoosting.pkl')
tfidf_vectorizer = joblib.load('tfidf_vectorizer.pkl')

@app.route('/')
def home():
    return "Welcome to the Product Review Analysis API!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if 'review' not in data:
        return jsonify({'error': 'Review text is required'}), 400

    review_text = data['review']
    review_vector = tfidf_vectorizer.transform([review_text])
    prediction = model.predict(review_vector)
    result = 'Fake Review' if prediction[0] == 1 else 'Real Review'
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
