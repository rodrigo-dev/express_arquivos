const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) =>{
res.send(
    '<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar</button> </form>')
})
app.get('/testes/:idUsuarios?/:parametro?', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
})
app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor Executando na porta 3000')
});
app.get('/contato', (req,res)=>{
    res.send('Page de contatos')

});
app.post('/', (req,res)=>{
    console.log(req.body);
    res.send(`Formulário enviado com sucesso nome enviado foi: ${req.body.nome}`)
})


