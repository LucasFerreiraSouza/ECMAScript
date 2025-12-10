var h1 = document.querySelector('h1');
var mensagem = document.getElementById('mensagem');
var imagem = document.getElementById('imagem');
var manual = document.getElementById('manual');
var hora = new Date().getHours();

manual.addEventListener('click', clicarManual);

function clicarManual(){
    hora = prompt('Digite a hora atual de 0 à 23:');
    hora = Number(hora);
    h1.innerHTML = `Agora são ${hora} horas.`; 
    atualizarPagina();
}

function atualizarPagina(){
    h1.innerHTML = `Agora são ${hora} horas.`; 

    if (hora >= 0 && hora < 12){
        //Bom dia
        mensagem.innerHTML = 'Bom dia!';
        imagem.innerHTML = '<img src="https://minecraftsix.com/wp-content/uploads/2015/01/yshaders-2.jpg"/>';
    }
    else if (hora >= 12 && hora < 18){
        //Boa tarde
        mensagem.innerHTML = 'Boa tarde!';
        imagem.innerHTML = '<img src="https://i.ytimg.com/vi/_h5Vf9WOp1M/sddefault.jpg"/>';
    } else if (hora >= 18 && hora <= 23){
        //Boa noite
        mensagem.innerHTML = 'Boa noite!';
        imagem.innerHTML = '<img src="https://i.tlauncher.org/images/1588580487-plunderpixels-shaders-6.jpg"/>';
    }  else {
        mensagem.innerHTML = '';
        imagem.innerHTML = '';
        h1.innerHTML = `Hora inválida!`; 

    }
}
atualizarPagina();
