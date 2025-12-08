        console.log("Página carregada com sucesso!");
        alert("Bem-vindo ao Traveller!");

        //nota média

        //var n1 = Number(prompt("Digite sua nota: "));
        //var n2 = Number(prompt("Digite sua segunda nota: "));
        //var media = (n1 + n2) / 2;

        //alert("Sua média é: " + media);

        //salário liquido   
        //var hoasTrab = Number(prompt("Digite o número de horas trabalhadas no mês: "));
        //var valorHora = Number(prompt("Digite o valor da sua hora de trabalho: "));
        //var imposto = Number(prompt("Digite o percentual de imposto (em %): "));

        //var salarioBruto = hoasTrab * valorHora;
        //var desconto = (imposto / 100) * salarioBruto;
        //var salarioLiquido = salarioBruto - desconto;
        //alert("Seu salário líquido é: R$ " + salarioLiquido.toFixed(2));

        //consumo de combustível
        //var distancia = Number(prompt("Digite a distância percorrida em km: "));
        //var litrosConsumidos = Number(prompt("Digite a quantidade de litros consumidos: "));
        //var consumoMedio = distancia / litrosConsumidos;
        //alert("O consumo médio do veículo é: " + consumoMedio.toFixed(2) + " km/l");

        //conversão de temperatura
        //var celsius = Number(prompt("Digite a temperatura em Celsius: "));
        //var fahrenheit = (celsius * 9/5) + 32;
        //alert(celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F");

        //área do círculo
        //var raio = Number(prompt("Digite o raio do círculo: "));
        //var area = Math.PI * Math.pow(raio, 2);
        //alert("A área do círculo é: " + area.toFixed(2));

        //replace nome
        //var mensagem = "Muito obrigado, **NOME**, por participar!";
        //var nome = prompt("Digite seu nome:");
        //var newName = mensagem.replace("**NOME**", nome);
        //alert(newName);
        

        //Decisão simples
        //var idade = Number(prompt("Digite sua idade: "));

        //if (idade >= 18) {
        //    alert("Você é maior de idade.");
        //} else {
        //    alert("Você é menor de idade.");
        //}

        //Decisão composta
        //var n1 = Number(prompt("Digite sua nota: "));

        //if (n1  >= 6 && n1 <= 10) {
        //    alert("Aprovado!");
        //} else if (n1 >= 0 && n1 < 6) {
        //    alert("Reprovado!");
        //} else {
        //    alert("Nota inválida!");
        //}

        //switch case

        //var cardapio = Number(prompt("Escolha um prato do cardápio:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Sushi"));

        //switch (cardapio) {
        //        case 1:
        //                alert("Você escolheu Pizza. Bom apetite!");
        //                break;
        //        case 2:
        //                alert("Você escolheu Hambúrguer. Bom apetite!");
        //                break;
        //        case 3:
        //                alert("Você escolheu Salada. Bom apetite!");
        //                break;
        //        case 4:
        //                alert("Você escolheu Sushi. Bom apetite!");
        //                break;
        //        default:
        //                alert("Opção inválida. Por favor, escolha um número entre 1 e 4.");
        //}

        //função

        //function avisar(){
        //        alert("Função executada com sucesso!");
        //}

        //avisar();

        //função com parâmetro e retorno
        //function somar(a, b){
        //        return a + b;
        //}

        //alert("A soma é: " + somar(5, 10));

        //manipulação html
        function alterarTitulo(){
                var novoTitulo = prompt("Digite o novo título para a seção de Destinos Populares:");
                document.getElementById("tituloPopular").innerText = novoTitulo;
        }