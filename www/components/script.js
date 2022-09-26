window.onload = function(){
    let url = 'http://bba.profrodolfo.com.br/livro.php';
    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then(function(json){
        let d = document.querySelector('#mainAcervo');
        let texto = '';

        for(let i = 0; i < json.length; i++){
            texto += '<section class="book-box">';
            texto += '<div class="img-livro">';
            texto += '<img src="http://bba.profrodolfo.com.br/imgs/imgs_capa/'+json[i].cd+'/'+json[i].capa+'" alt="Capa do livro" height="80px">';
            texto += '</div>';
            texto += '<h3>Título: '+json[i].titulo+' </h3>';
            texto += '<h4>Autor: '+json[i].Autor+'</h4>';
            texto += '<h4>Editora: '+json[i].Editora+'</h4> ';
            texto += '<h4 id="verLivro">Ver livro</h4>';
            texto += '</section>';
        }
        d.innerHTML += texto;

    })
.catch();   
}
