const readline = require('readline');

// Cria uma interface de leitura para ler entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para gerar a jogada do computador
function gerarJogo() {
    const options = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Função principal do jogo
function jogarUmJogo() {
    rl.question('Escolher: pedra, papel ou tesoura: ', (userInput) => {
        // gera a jogada do computador
        const computerInput = gerarJogo();

        console.log(`Você escolheu ${userInput}.`);
        console.log(`O programa escolheu ${computerInput}.`);

        // verifica quem ganhou
        if (userInput === computerInput) {
            console.log("É um empate!");
        } else if (
            (userInput === 'pedra' && computerInput === 'tesoura') ||
            (userInput === 'papel' && computerInput === 'pedra') ||
            (userInput === 'tesoura' && computerInput === 'papel')
        ) {
            console.log('Você ganhou!');
        } else {
            console.log('Você perdeu!');
        }

        // pergunta se o usuário quer jogar novamente
        rl.question('Quer jogar novamente ? (s/n) ', (jogarDeNovo) => {
            if (jogarDeNovo.toLowerCase() === 's') {
                // se o usuário quer jogar novamente, chama a função novamente
                jogarUmJogo();
            } else {
                // se o usuário não quer jogar novamente, fecha a interface de leitura
                console.log('Obrigado pela sua presença! E volte sempre');
                rl.close();
            }
        });
    });
}

// inicia o jogo
jogarUmJogo();
