exports.paginaInicial = (req, res) => {
    res.send(
        '<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar</button> </form>')
};
exports.trataPOST = (req,res)=>{
    res.send('sou sua nova rota de post');
};
