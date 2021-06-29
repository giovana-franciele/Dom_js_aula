( () => {
const novaTarefa = document.querySelector('[data-form-button]') //Tomar cuidado com o espeço
const inputTarefa = document.querySelector('[data-form-input]')

function criarBotaoDelete(){
	const botaoDelete = document.createElement('span')
	botaoDelete.innerText = "x"
	botaoDelete.classList = "close"

	botaoDelete.addEventListener('click', deletarTarefa) //Função nativa

	return botaoDelete
}

function criarBotaoConcluir(){
	const botaoConcluir = document.createElement('input')
	botaoConcluir.setAttribute('type', 'checkbox')
	botaoConcluir.classList = 'form-check-input'

	botaoConcluir.addEventListener('click', concluirTarefa) 

	return botaoConcluir
}

function concluirTarefa(evento) {
	const botaoConcluirClicado = evento.target
	const itemDaListaConcluido = botaoConcluirClicado.parentElement
	itemDaListaConcluido.classList.toggle('tarefa_concluida')
}

function deletarTarefa(evento){
	const botaoDeleteClicado = evento.target
	const itemDaLista = botaoDeleteClicado.parentElement
	itemDaLista.remove()
}


function criarTarefa(evento)//O parametro se chama evento
{
	evento.preventDefault()//Parar de aualizar (O DOM assume o comando)

	const valorTarefa = inputTarefa.value
	const listaDeTarefa = document.querySelector('[data-task]')

	novaLabel = document.createElement('label')
    novaLabel.innerText = `- ${valorTarefa}`
    novaLabel.className = "form-check-label"

    novoItem = document.createElement('li')
    novoItem.className = "lista_atividades"
    novoItem.appendChild(criarBotaoConcluir())
    novoItem.appendChild(novaLabel)
    novoItem.appendChild(criarBotaoDelete())

    listaDeTarefa.appendChild(novoItem)

    inputTarefa.value = ""

}

novaTarefa.addEventListener('click', criarTarefa) //Adicionando um evento
})()