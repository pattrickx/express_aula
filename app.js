var express = require('express');
var app = express();

app.get('/soma', function(req, res) {
    const {a}=req.query
    const {b}=req.query
    
    res.send({"soma":soma(+a,+b)});
});

app.post('/somab', function(req, res) {
    const {a,b} = req.body    
    res.send({"soma":soma(+a,+b)});
});

function soma(a, b) {
    return a + b;
  }

var port = 9090;

// iniciando o processo do servidor
app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
