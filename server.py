from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def renderPage():
    return render_template("index.html")

@app.route("/product")
def product():
    return render_template("products.html")

@app.route("/why")
def reason():
    return render_template("why.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
