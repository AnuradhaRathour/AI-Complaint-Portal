def predict_priority(text):
    high_keywords = ["fraud", "money", "urgent", "hack", "scam"]

    text = text.lower()

    for word in high_keywords:
        if word in text:
            return "High"

    return "Normal"
