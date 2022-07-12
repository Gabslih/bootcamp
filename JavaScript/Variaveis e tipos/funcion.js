function verificaPalindromo(string){
    if(!string) return;

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

// solução 2 

function verificapalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = o; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
        
    }
}