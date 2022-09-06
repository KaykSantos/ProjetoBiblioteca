<<<<<<< HEAD
window.onload = function(){
    let url = 'http://bba.profrodolfo.com.br/php/livro.php';
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
            texto += '<img src="'+json[i].capa+'" alt="Capa do livro" height="80px">';
            texto += '</div>';
            texto += '<h3>Título: '+json[i].titulo+' </h3>';
            texto += '<h4>Autor: '+json[i].id_genero+'</h4>';
            texto += '<h4>Editora: '+json[i].id_editora+'</h4> ';
            texto += '<hr>';
            texto += '</section>';
        }
        d.innerHTML += texto;
    })
.catch();   
}
=======
window.onload = function(){
    let url = 'http://bba.profrodolfo.com.br/php/livro.php';
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
            texto += '<img src="'+json[i].capa+'" alt="Capa do livro" height="80px">';
            texto += '</div>';
            texto += '<h3>Título: '+json[i].titulo+' </h3>';
            texto += '<h4>Autor: '+json[i].id_genero+'</h4>';
            texto += '<h4>Editora: '+json[i].id_editora+'</h4> ';
            texto += '<hr>';
            texto += '</section>';
        }
        d.innerHTML += texto;
    })
.catch();   
}

>>>>>>> db35cb53f507b4df1c1f8993a38269d8de196baa
