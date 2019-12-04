const posts = [{ autor: 'leo', texto: 'teste1' },
    { autor: "leo", texto: "teste2" }, { autor: 'leo', texto: 'teste3' },
    { autor: 'soter', texto: 'comprar pao' }, { autor: 'joao', texto: 'teste5' }
];
function filterPost(arr, autor) {
    const result = arr.filter((el) => {
        return el.autor === autor;
    });
    return result;
}
console.log(filterPost(posts, "soter"));
//# sourceMappingURL=ex2.js.map