function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");
    const botao = document.querySelector(".botao")
    //ul.children[0].append("(Alterado)");
    
    //let newLi = document.createElement("li")
    //newLi.innerText = "Item adicionado"

    //ul.appendChild(newLi)
    
    const newButton = document.createElement("button");
    newButton.innerHTML = "Botão";
    //ul.after(newButton)

    newUl = document.createElement("ul")
    //ul.after(newUl)

    for (let index = 0; index < 5; index++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = 'Item add ' + (index+1)
        newUl.append(newLi)
    }

    const input = document.querySelector('input')

    if (input.getAttribute('type') === 'text') {
        
        input.setAttribute('type', 'password')
        botao.innerHTML = "Mostrar senha"
    }
    else{
    
        input.setAttribute('type', 'text')
        botao.innerHTML = "Ocultar senha"
    }

    const li = document.querySelector("li")
    //li.style.backgroundColor = "#444"
    //li.style.fontSize = "20px"

    //botao.classList.add('verde')
}

function soltou(e){
    console.log("Soltou!")
    console.log(e.code)
}


//input.addEventListener('keyup', soltou);

//Desafio da lista de tarefas
const input = document.querySelector("input");
const lista = document.querySelector("ul")


function handleKeyUp(e) {
    if(e.key === 'Enter'){
        const newLi = document.createElement("li");
        newLi.innerHTML = input.value
        lista.appendChild(newLi)

        input.value = '';
    }
}

input.addEventListener("keyup", handleKeyUp);