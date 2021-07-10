// obter o valor de input
// Se for Sim, mostrar categorias disponíveis e perquntar qual a categoria
//Senão, mostrar todos os livros em odem crescente de quantidade de páginas

const livros = require('./script')  //importando array do arquivo script.js
const readline = require('readline-sync') //importando biblioteca readline-sync do node

const entradaInicial = readline.question('Deseja buscar um livro? S/N: ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
     console.log('Essas são as categorias disponíveis: ')
     console.log('Produtividade', '/Historia', '/Americas', '/Tecnologia')

     const entradaCategoria = readline.question('Selecione uma categoria: ')

     const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

     console.table(retorno)
} else {
    const livrosOdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Estas são todos os livors disponíveis: ')
    console.table(livrosOdenados)

}

