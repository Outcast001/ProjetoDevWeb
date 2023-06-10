// botões numéricos
let div1 = document.getElementById("div1"); 
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");
let div8 = document.getElementById("div8");
let div9 = document.getElementById("div9");
let input = document.querySelector('input');
// operadores
let sum = document.getElementById("soma");
let sub = document.getElementById("subtracao");
let mult = document.getElementById("multiplicacao");
let divisao = document.getElementById("divisao");
let igual = document.getElementById("igual");
// Lista dos botões numéricos.
var div_list = [ 
    div1, div2, div3, 
    div4, div5, div6, 
    div7, div8, div9
];
// Função que atribui valores numéricos aos botões correspondentes.
function display(div, num){       
    div.addEventListener('click', (event) => {
        event.preventDefault();
        input.value += num;
        if (num == '= '){ 
            alert("Você digitou: " + input.value);
            /* Teste (para somar os valores no futuro).
                Idéia: Criar uma variável (ex.: `var valor = "valor"`)
                       que armazena os valores numéricos (apenas) digitados
                       pelo usuário. Necessário tratar os dados do usuário.
                Observação: Pesquisar e consultar o bing.
            */
        }
    });
};

display(sum, ' + ');
display(sub, ' - ');
display(mult, ' x ');
display(divisao, ' / ');
display(igual, '= ');

// Loop de atribuição dos botões numéricos.
for (var i = 0; i <= div_list.length; i++){
    display(div_list[i], (i + 1));
};

