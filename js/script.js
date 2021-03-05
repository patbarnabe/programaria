//Obrigatoriedade de preenchimento dos campos Nome e Email como requisito para envio do formulário

/* se o campo  de nome estiver preenchido e o campo de email estiver preenchido
        envie os dados
    senão
        solicite o preenchimento dos campos à usuária */

/*
if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
    alert("Pronto! Você receberá as novidades por e-mail.")
}else{
    alert("Por favor, preencha todos os campos!")
}
*/

//Funcionalidade do botão "Enviar" -> Estrutura de um Listener: dequemviráoevento.addEventListener("evento", oquedevefazer) 



function validaFormulario(){
    if(document.getElementById("nome").value != "" && 
        document.getElementById("email").value != "" && 
        document.getElementById("telefone").value != ""){
            alert("Pronto! Você receberá as novidades por e-mail.")
    }else{
        alert("Por favor, preencha todos os campos!")
    }
}

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);