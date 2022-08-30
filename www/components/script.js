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
 /* <section class="book-box">
        <div class="img-livro">
            <img src="" alt="Capa do livro" height="150px">
        </div>
        <h3>Título: </h3> 
        <h4>Autor: </h4>
        <h4>Editora: </h4> 
    </section>
*/

/*else{
    for(let i = 0; i < json.length; i++){
    texto += '<div class="row">';
        texto += '<div class="col-4">';
            texto+= '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/"'+json[i].foto+'">';
        texto += '</div>';
        texto += '<div class="col-7">';
            texto += '<h1>'+json[i].nome+'</h1>';
            texto += '<h3>'+json[i].valor+'</h3>';
        texto += '</div>';
    texto += '</div>';
    }
    d.innerHTML += texto;
}*/