const novaTarefa = document.querySelector('[data-form-button]') //Tomar cuidado com os espeços
const inputTarefa = document.querySelector('[data-form-input]')

function criarTarefa(evento)//O parametro se chama evento
{
	evento.preventDefault()//Parar de aualizar (O DOM assume o comando)

	const valorTarefa = inputTarefa.value
	const listaDeTarefa = document.querySelector('[data-task]')

	novaLabel = document.createElement('label')
    novaLabel.innerText = valorTarefa
    novaLabel.className = "form-check-label"

    novoItem = document.createElement('li')
    novoItem.appendChild(novaLabel)

    listaDeTarefa.appendChild(novoItem)

    inputTarefa.value = ""

}

novaTarefa.addEventListener('click', criarTarefa) //Adicionando um evento