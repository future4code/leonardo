function verifyOneEdit( s1: string, s2: string){
    let count = 0
    const array1Length = s1.length
    const array2Length = s2.length
    if( array1Length > array2Length +1 || array1Length < array2Length -1)
        return false
    for( let i =0 ; i<array2Length; i++) {
        if(s1.indexOf(s2[i]) !== -1)
            count ++

    }
    return count <= array1Length + 1;
}