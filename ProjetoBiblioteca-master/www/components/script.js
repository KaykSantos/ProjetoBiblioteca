window.onload = function(){
    let url = 'http://bba.profrodolfo.com.br/livro.php';
    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then(function(json){
        let d = document.querySelector('#mainAcervo');
        let texto = '';
        let x;
        for(let i = 0; i < json.length; i++){
            if(x != json[i].cd){
                texto += '<section class="book-box">';
                texto += '<div class="img-livro">';
                texto += '<img src="http://bba.profrodolfo.com.br/imgs/imgs_capa/'+json[i].cd+'/'+json[i].capa+'" alt="Capa do livro" height="80px">';
                texto += '</div>';
                texto += '<h3>Título: '+json[i].titulo+' </h3>';
                texto += '<h4>Autor: '+json[i].Autor+'</h4>';
                texto += '<h4>Editora: '+json[i].Editora+'</h4>';
                texto += '<button value="'+json[i].cd+'" class="btnpadrao" onclick="verLivro(this.value)">Ver Livro</button>';
                //texto += '<input class="verLivro" hidden type="text" value="'+json[i].cd+'">';
                //texto += '<div onclick="verLivro()">Ver livro</div>';
                texto += '</section>';
                x = json[i].cd;
            }
        }
        d.innerHTML += texto;

    })
.catch();   
}
function verLivro(cd){
    alert(cd);
    localStorage.setItem('codigoLivro', cd);
    window.location.replace('livro.html');
}