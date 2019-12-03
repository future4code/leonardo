const arr = [1, 2, 3, 4, 5];
function array(arr) {
    let lengthArr = arr.length;
    let numImpar = arr.filter((el) => {
        return el % 2 !== 0;
    });
    let impar = numImpar.length;
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    const obj = {
        lengthArr,
        numImpar: impar,
        soma
    };
    return obj;
}
console.log(array(arr));
//# sourceMappingURL=ex1.js.map