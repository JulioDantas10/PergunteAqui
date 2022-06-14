const resposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const disablebutton = document.querySelector('#disableButton')
const respostas = [
    "Não :(",
    "Provavelmente",
    "Quem sabe :)",
    "Espero que sim!",
    "Espere mais um pouco e vera!",
    "Talvez seja melhor não.",
    "Correee!",
    "Já correu atrás hoje?",
    "Sim seguido de sim.",
    "Concetre-se naquilo que quer.",
    "Sinais ja me falaram que não.",
    "Nem Thomas Shelby saberia responder essa.",
    "Você pode contar com isso."

]



// Clicar em fazer pergunta
function fazerPergunta() {
    if (inputPergunta.value == "") {
        window.alert("Por favor, digite sua pergunta.")
        return
    }

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // Gerar numero aleatorio
    const TotalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * TotalRespostas)
    disablebutton.setAttribute("disabled", true)


    resposta.innerHTML = pergunta + respostas[numeroAleatorio]
    resposta.style.opacity = 1;
    // Sumir a respota depois de 3 segundos
    setTimeout(function () {
        resposta.style.opacity = 0;
        disablebutton.removeAttribute('disabled', false)

    }, 3000)

}

