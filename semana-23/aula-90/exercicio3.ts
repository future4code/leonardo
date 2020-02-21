function printArray(array: number[], index: number = array.length):void {
    if (index >= 0 ){
        printArray( array, index-1)
        console.log(array[index])
    }
}   