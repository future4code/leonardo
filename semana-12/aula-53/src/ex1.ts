const arr = [1, 2, 3, 4, 5]
type obj = {
    lengthArr: number;
    numImpar: number;
    soma: number;
};

function array(arr: number[]): obj {
    let lengthArr = arr.length
    let numImpar: number[] = arr.filter((el: number) => {
        return el % 2 !== 0
    })
    let impar: number = numImpar.length
    let soma: number = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    const obj: obj = {
        lengthArr,
        numImpar: impar,
        soma
    }
    return obj
}

console.log(array(arr))