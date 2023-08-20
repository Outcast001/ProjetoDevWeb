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
let div0 = document.getElementById("div0");

// operadores
let sum = document.getElementById("soma");
let sub = document.getElementById("subtracao");
let mult = document.getElementById("multiplicacao");
let divisao = document.getElementById("divisao");
let igual = document.getElementById("igual");
let virgula = document.getElementById("virgula");

// Função que atribui valores numéricos aos botões correspondentes.
function botoes(div, num){       
    div.addEventListener('click', (event) => {
        event.preventDefault();
        input.value += num;
        });
};

// valores dos botões numéricos.
soma = botoes(sum, ' + ');
subtrai = botoes(sub, ' - ' );
multiplica = botoes(mult, ' x '); // Substituir `x` por `*` nos cálculos.
divide = botoes(divisao, ' / ');
// virgula = botoes(virgula, '');
// resultado = botoes(igual, '= ');

// valores dos botões numéricos.
const b01 = botoes(div1, 1);
const b02 = botoes(div2, 2);
const b03 = botoes(div3, 3);
const b04 = botoes(div4, 4);
const b05 = botoes(div5, 5);
const b06 = botoes(div6, 6);
const b07 = botoes(div7, 7);
const b08 = botoes(div8, 8);
const b09 = botoes(div9, 9);
const b00 = botoes(div0, 0);
