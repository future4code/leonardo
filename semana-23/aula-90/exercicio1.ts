function printNumbers (n1: number):void {
    if (n1 <= 0){
       return console.log(n1)
    }
    
    printNumbers(n1 -1)
    console.log(n1)
  }

  function printNumbersReverse (n1: number):void {
    if (n1 <= 0){
       return console.log(n1)
    }
    console.log(n1)
    printNumbersReverse(n1 -1)
  }