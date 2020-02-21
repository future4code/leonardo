function calcSum (n1: number, sum:number= 0) : number {
    if ( n1 <= 0)
        return sum
    return calcSum(n1 -1, sum + n1)
  }