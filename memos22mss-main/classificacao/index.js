const express = require('express');
const app = express();
app.use(express.json());

const palavraChave = 'Importante';
const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = 
            observacao.texto.includes(palavraChave)
            ? 'Importante'
            : 'Comum';
        axios.post("https://localhost:10000/eventos", {
            tipo: "Obervação Classificada",
            dados: "Observação"
        })
    }
}

app.post('/eventos', (req, res) => {
    funcoes[req.body.tipo](req.body.dados);
    res.status(200).send({msg: 'ok'})
});

app.listen(7000, () => console.log('Classificação. Porta 7000'));