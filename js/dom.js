
//Página DOM Interativo
//const titulo = document.querySelector('#titulo');
//const inputNome = document.querySelector('#nome');
//const botao = document.querySelector('#btn');
//const mensagem = document.querySelector('#mensagem');
//const contadorSpan = document.querySelector('#contador');

//let contador = 0;

//btn.addEventListener('click', () => {
//    contador++;

//    const nome = inputNome.value;
//    titulo.innerText = `Olá, ${nome}!`;
//    mensagem.innerText = `Você clicou no botão ${contador} vezes.`;
//    contadorSpan.innerText = contador;
//});

//Página DOM Login
const form = document.querySelector('#formLogin');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const loading = document.querySelector('#loading');
const mensagem = document.querySelector('#mensagem');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        mensagem.innerText = '';
        mensagem.className = '';

        const email = emailInput ? emailInput.value.trim() : '';
        const senha = senhaInput ? senhaInput.value.trim() : '';

        if (email === "" || senha === "") {
            mensagem.innerText = 'Por favor, preencha todos os campos.';
            mensagem.classList.add('erro');
            return;
        }
        
        if (loading) loading.classList.remove('hidden');

        setTimeout(() => {
            if (loading) loading.classList.add('hidden');

            if (email === "laura@email.com" && senha === "123") {
                mensagem.innerText = 'Login bem-sucedido!';
                mensagem.classList.add("sucesso");
            } else {
                mensagem.innerText = 'Email ou senha incorretos.';
                mensagem.classList.add("erro");
            }
        }, 2000);
    });
}