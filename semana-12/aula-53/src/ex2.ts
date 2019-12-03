type post = {
    autor: string
    texto: string
}

const posts: post[] = [{ autor: 'leo', texto: 'teste1' },
{ autor: "leo", texto: "teste2" }, { autor: 'leo', texto: 'teste3' },
{ autor: 'soter', texto: 'comprar pao' }, { autor: 'joao', texto: 'teste5' }
]

function filterPost(arr: post[], autor: string): post[] {
    const result: post[] = arr.filter((el) => {
        return el.autor === autor
    })
    return result
}

console.log(filterPost(posts, "soter"))