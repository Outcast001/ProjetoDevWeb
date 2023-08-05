function name(){
    var nome = "Adryan";
    return nome;
    
}; my_name = name();

function apresentacao(nome){
    var introduce = `Ola! Meu nome e ${nome}`;
    console.log(introduce);

}; // apresentacao(my_name); // funciona!

console.log(`A letra ${my_name[0]} e a primeira letra do meu nome`);
console.log(`A letra ${my_name[5]} e a ultima letra do meu nome`);
console.log(my_name);
console.log(`Meu nome tem ${my_name.length} letras.`)
