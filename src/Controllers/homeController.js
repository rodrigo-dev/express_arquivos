exports.paginaInicial = (req, res) => {
    res.render('index')
};
exports.trataPOST = (req,res)=>{
    res.send('sou sua nova rota de post');
};
