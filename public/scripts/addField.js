document.querySelector("#add-time").addEventListener('click',cloneField) //primeiro parametro é o tipo do evento e o segundo a funçao. https://cursos.alura.com.br/forum/topico-diferenca-da-chamada-de-uma-funcao-com-e-sem-parenteses-25138 -> Explicaçao do uso da funçao sem os parenteses 

function cloneField(){

    //É const porque newFieldContainer sempre recebera esse valor
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //Clonar o campo schedule-item com todos os conteudos deles (por causa do true),se nao fosse o true so pegaria o <div></div>

    //limpar os campos

    const fields = newFieldContainer.querySelectorAll('input') //Seleciona todos os inputs
    
    fields.forEach(function(field){
        field.value = ""        
    })         

    document.querySelector('#schedule-items').appendChild(newFieldContainer)  
}