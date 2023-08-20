var input = document.querySelector('input');   // Display
var result = document.getElementById("igual"); // Botão de "igual"
var limpar = document.getElementById("ca");    // Deleta valor no display => "Clear All"

result.addEventListener('click', (event) => {
    event.preventDefault();

    var operation = input.value;     // Obtém operação
    op_split = operation.split(" "); // Separa numeros de operadores

    /* Laço principal */
    for (var operator of op_split) {
        if (operator === "+"){
            var resultado  = xx_("+");

        } else if (operator == "-") {
            var resultado = xx_("-");

        }  else if (operator == "x") {
            var resultado = xx_("x");

        }  else if (operator == "/") {
            var resultado = xx_("/");

        } else {
            var resultado = "ERROR";
        }
    };
    console.log(resultado);
    input.value = document.getElementById('entrada').innerText += resultado;
});

function xx_ (op){
    var op_position = op_split.indexOf(op); // Identifica a posição do operador
    /* Separa numeros */
    op_split.splice(op_position, 1); 
    var n1 = op_split[0]; 
    var n2 = op_split[1];
    
    /* Calcula o resultado */
    if (op == "+"){
        var resultado  = Number(n1) + Number(n2);
    } else if (op == "-") {
        var resultado = Number(n1) - Number(n2);
    }  else if (op == "x") {
        var resultado = Number(n1) * Number(n2);
    } else if (op == "/") {
        var resultado = Number(n1) / Number(n2);
    };
    
    return resultado;
};

limpar.addEventListener('click', (event) => {
    event.preventDefault();
    input.value = document.getElementById('entrada').innerText += '';
});
