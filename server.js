const express = require('express');
const app = express();

app.get('/', (req,res) =>{
res.send('Hello World')
})
app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor Executando na porta 3000')
});
app.get('/contato', (req,res)=>{
    res.send('Page de contatos')

});


