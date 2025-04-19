from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/dinosaurios/paises', methods=['GET'])
def get_dinos_paises():
    df = pd.read_csv('./datas_csv/top_10_paises_especies.csv')
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/dinosaurios/longitud', methods=['GET'])
def get_dinos_longitud():
    df = pd.read_csv('./datas_csv/Dinosaurios_por_longitud.csv')
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/dinosaurios/alimentacion', methods=['GET'])
def get_dinos_alimentacion():
    df = pd.read_csv('./datas_csv/cantidad_dinos_y_tipo_alimentacion.csv')
    return jsonify(df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
