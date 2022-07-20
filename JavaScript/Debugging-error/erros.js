
function validaArray(arr, num) {
 try {
    if(!arr && !num) throw new ReferenceError("envie os parâmentros");

    if(typeof arr !== 'object') throw new TypeError("array precisa ser do tipo object");

    if(typeof arr !== 'number') throw new TypeError("array precisa ser do tipo number");

    if(arr.length !== num) throw new RangeError("Tamanho inválido!");

    return arr;
 }

    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangerError){
        console.log("este erro é um RangerError!")
        console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray())
