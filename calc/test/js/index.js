// Função que atribui valores aos botões.
function display(div, num){       
    div.addEventListener('click', (event) => {
        event.preventDefault();
        input.value += num;
    });
};
console.log('Hello, world!');

function soma(){
    sum.addEventListener('click', (event) => {
        event.preventDefault();
        var valor = input.value
        console.log(valor);
    })
}