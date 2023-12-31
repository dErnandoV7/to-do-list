"use strict";

let contadorTarefa = 0
const boxTarefas = document.querySelector('.list-container')

// padrão para futuras tarefas
const defaultTarefa = document.createElement('div')
defaultTarefa.setAttribute('class', 'tarefa')

const defaultTarefaContent = document.createElement('div')
defaultTarefaContent.setAttribute('class', 'tarefa-content')

const defaultInput = document.createElement('input')
defaultInput.setAttribute('type', 'checkbox')
defaultInput.setAttribute('class', 'check')

const defaultLabel = document.createElement('label')

const defaultImg = document.createElement('img')
defaultImg.setAttribute('src', 'img/x.svg')
defaultImg.setAttribute('class', 'delete')

defaultTarefaContent.appendChild(defaultInput)
defaultTarefaContent.appendChild(defaultLabel)
defaultTarefa.appendChild(defaultTarefaContent)
defaultTarefa.appendChild(defaultImg)

// botao de adicionar tarefas
const valueTarefa = document.querySelector('.novaTarefa')
const button = document.querySelector(".buttonAdd");

button.onclick = (event) => {
  event.preventDefault()
  
  if (!valueTarefa.value) return

  const newTarefa = defaultTarefa.cloneNode(true)
  const newTarefaContent = newTarefa.querySelector('div')

  newTarefa.classList.add(`tarefa-${contadorTarefa}`)
  newTarefaContent.querySelector('input').classList.add(`check-${contadorTarefa}`)
  const newLabel = newTarefaContent.querySelector('label')
  const newInput = newTarefaContent.querySelector('input')
  newLabel.textContent = valueTarefa.value
  newLabel.setAttribute('for', `check${contadorTarefa}`)
  newInput.setAttribute('id', `check${contadorTarefa}`)

  boxTarefas.appendChild(newTarefa)
  console.log(newTarefa)
  valueTarefa.value = ''
  contadorTarefa++

  return verificarCheck()
}


boxTarefas.onclick = (event) => {
  // Excluir tarefas
  if (event.target.classList.contains('delete')) {
    event.target.classList.add('transitionTarefa')
    setTimeout(() => {
      event.target.parentElement.remove()
    }, 500)
  }

  // Marcar check
  if (event.target.classList.contains('check')) {
    const elParam = event.target
    if (elParam.checked) {
      elParam.classList.add('checked')
    } else {
      elParam.classList.remove('checked')
    }
  }
}

function verificarCheck() {
  if (contadorTarefa) {
    const allCheck = document.querySelectorAll('.check')
    allCheck.forEach(check => {
      check.classList.contains('checked') ? check.checked = true : check.checked = false;
    })
  }
}