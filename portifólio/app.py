"""
 * Importação do python para calcular automaticamente a idade do usuário, com a data de nascimento do mesmo.
 * Integrado: 12/02/2026
 * Por: Cauã de Oliveira
 """
 
from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    data_nascimento = datetime.datetime(2005, 1, 5)
    idade = (datetime.datetime.now() - data_nascimento).days // 365
    return render_template('index.html', idade=idade)

if __name__ == '__main__':
    app.run(debug=True)
