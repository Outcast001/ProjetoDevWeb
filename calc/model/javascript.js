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
    calc = ''
    div.addEventListener('click', (event) => {
        event.preventDefault();
        input.value += num;
        calc += `${num}`.trim();
        var result = calc;
        if (num == '= '){ 
            console.log(result);
            console.log(
                `expressão: ${result.slice(0, -1)}`);
            console.log(
                `Resultado: ${parseInt(`${result}`)}`);
            console.log(
                `Resultado esperado: ${parseFloat(`${2+6}`)}`);
        }
    });
};

// valores dos botões numéricos.
soma = display(sum, ' + ');
subtrai = display(sub, ' - ' );
multiplica = display(mult, ' x '); // Substituir `x` por `*` nos cálculos.
divide = display(divisao, ' / ');
resultado = display(igual, '= ');

// valores dos botões numéricos.
display(div1, 1);
display(div2, 2);
display(div3, 3);
display(div4, 4);
display(div5, 5);
display(div6, 6);
display(div7, 7);
display(div8, 8);
display(div9, 9);
